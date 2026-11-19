import { prepareTexts } from "/p/the8020/i18n/mod.ts";
import {
  localizedText as resolveMessage,
  text as formatMessage,
} from "/p/the8020/i18n/mod.ts";
import { msg as messageSymbol } from "/p/the8020/users/i18n/messages.ts";
// @deno-types="../vendor/x509.ts"
import {
  BasicConstraintsExtension,
  ExtendedKeyUsageExtension,
  fromBER,
  KeyUsageFlags,
  KeyUsagesExtension,
  X509Certificate,
} from "../vendor/x509.js";
import { createHash } from "node:crypto";
import { AdminCommandError } from "@the8020/kernel";
import { context } from "@the8020/context";
import { requirePermission } from "/p/the8020/auth/mod.ts";
import { transaction } from "/p/the8020/db/mod.ts";
import Certificates from "../tables/certificates.ts";
import Users from "../tables/users.ts";
import { certificate } from "../types/certificate.ts";

export function inspectCertificate(input: string | Uint8Array) {
  if (input.length === 0 || input.length > 65536) {
    throw new TypeError(
      formatMessage(
        messageSymbol("errors.certificate_must_contain_1_65536_bytes"),
      ),
    );
  }
  if (input instanceof Uint8Array && input[0] !== 0x30) {
    input = new TextDecoder("utf-8", { fatal: true }).decode(input);
  }
  if (
    typeof input === "string" &&
    !/^\s*-----BEGIN CERTIFICATE-----\s+[A-Za-z0-9+/=\s]+-----END CERTIFICATE-----\s*$/
      .test(input)
  ) {
    throw new TypeError(
      formatMessage(
        messageSymbol(
          "errors.provide_one_public_pem_certificate_without_a_private_key",
        ),
      ),
    );
  }
  const parsed = new X509Certificate(
    typeof input === "string" ? input : new Uint8Array(input),
  );
  const der = new Uint8Array(parsed.rawData);
  // Some parsers accept the first DER object and ignore trailing input.
  if (fromBER(parsed.rawData).offset !== der.length) {
    throw new TypeError(
      formatMessage(
        messageSymbol(
          "errors.provide_one_der_certificate_without_trailing_data",
        ),
      ),
    );
  }
  if (parsed.getExtension(BasicConstraintsExtension)?.ca) {
    throw new TypeError(
      formatMessage(
        messageSymbol("errors.a_client_certificate_must_not_be_a_ca"),
      ),
    );
  }
  const signing = parsed.getExtension(KeyUsagesExtension);
  if (signing && !(signing.usages & KeyUsageFlags.digitalSignature)) {
    throw new TypeError(
      formatMessage(
        messageSymbol("errors.certificate_does_not_permit_signing"),
      ),
    );
  }
  const usage = parsed.getExtension(ExtendedKeyUsageExtension)?.usages;
  if (
    usage !== undefined && !usage.includes("1.3.6.1.5.5.7.3.2") &&
    !usage.includes("2.5.29.37.0")
  ) {
    throw new TypeError(
      formatMessage(
        messageSymbol(
          "errors.certificate_does_not_permit_client_authentication",
        ),
      ),
    );
  }
  const now = new Date();
  if (parsed.notBefore > now || parsed.notAfter <= now) {
    throw new TypeError(
      formatMessage(messageSymbol("errors.certificate_is_not_currently_valid")),
    );
  }
  return {
    fingerprint: createHash("sha256").update(der).digest("hex"),
    subject: parsed.subject,
    issuer: parsed.issuer,
    validFrom: parsed.notBefore,
    expiresAt: parsed.notAfter,
  };
}

/** Remaining days below which a certificate is shown as expiring soon. */
export const CERTIFICATE_WARNING_DAYS = 30;
/** Remaining days below which the owner is prompted to request a new one. */
export const CERTIFICATE_URGENT_DAYS = 10;
const DAY_MS = 24 * 60 * 60 * 1000;

/** Whole remaining days, rounded down, with display text and severity. */
export function certificateValidity(expiresAt: Date, now = new Date()) {
  const remaining = expiresAt.getTime() - now.getTime();
  const days = Math.max(0, Math.floor(remaining / DAY_MS));
  const text = remaining <= 0
    ? formatMessage(messageSymbol("errors.expired"))
    : days === 0
    ? formatMessage(messageSymbol("errors.expires_within_a_day"))
    : formatMessage(
      messageSymbol("errors.expires_in", {
        days: String(days),
      }),
    );
  const status = remaining <= 0 || days < CERTIFICATE_URGENT_DAYS
    ? "danger" as const
    : days < CERTIFICATE_WARNING_DAYS
    ? "warning" as const
    : "ok" as const;
  return { expired: remaining <= 0, days, text, status };
}

/** The user's currently valid certificate that expires first, if any. */
export async function nearestCertificateExpiry(
  username: string,
  now = new Date(),
) {
  const nearest = (await listCertificates(username))
    .filter((row) => row.validFrom <= now && row.expiresAt > now)
    .sort((a, b) => a.expiresAt.getTime() - b.expiresAt.getTime())[0];
  if (nearest === undefined) return undefined;
  return {
    label: nearest.label || nearest.subject,
    expiresAt: nearest.expiresAt,
    ...certificateValidity(nearest.expiresAt, now),
  };
}

async function authorize(username: string) {
  if (!context.authenticated || context.username !== username) {
    await requirePermission("the8020.users.user.certificates", username);
  }
}

export async function listCertificates(username: string) {
  await prepareTexts(messageSymbol("errors.expires_in"));
  await authorize(username);
  return await Certificates.selectAll()
    .where(Certificates.username, "=", username)
    .orderBy(Certificates.createdAt).orderBy(Certificates.fingerprint)
    .limit(100).execute();
}

export async function addCertificate(
  username: string,
  label: string,
  input: string | Uint8Array,
) {
  await authorize(username);
  await prepareTexts(
    messageSymbol("errors.certificate_must_contain_1_65536_bytes"),
  );
  const details = inspectCertificate(input);
  const name = certificate.shape.label.parse(label);
  return await transaction({ timeoutMs: 2000 }, async (tx) => {
    // Serialize enrollment with account deletion and the per-user bound.
    const account = await tx.updateTable(Users.table)
      .set({ updatedAt: new Date() }).where(Users.username, "=", username)
      .executeTakeFirst();
    if (account.numUpdatedRows === 0n) {
      throw new AdminCommandError({
        code: "not_found",
        message: await resolveMessage(messageSymbol("errors.user_not_found")),
      });
    }
    const count = await tx.selectFrom(Certificates.table)
      .select((eb) => eb.fn.countAll<number>().as("count"))
      .where(Certificates.username, "=", username).executeTakeFirstOrThrow();
    if (count.count >= 100) {
      throw new AdminCommandError({
        code: "conflict",
        message: await resolveMessage(
          messageSymbol("errors.a_user_may_enroll_at_most_100_certificates"),
        ),
      });
    }
    const result = await tx.insertInto(Certificates.table).values({
      ...details,
      username,
      label: name,
      createdAt: new Date(),
    }).onConflict((conflict) => conflict.column("fingerprint").doNothing())
      .executeTakeFirst();
    if (result.numInsertedOrUpdatedRows === 0n) {
      throw new AdminCommandError({
        code: "conflict",
        message: await resolveMessage(
          messageSymbol("errors.certificate_is_already_enrolled"),
        ),
      });
    }
    return details;
  });
}

export async function removeCertificate(username: string, fingerprint: string) {
  await authorize(username);
  certificate.shape.fingerprint.parse(fingerprint);
  await Certificates.delete().where(Certificates.username, "=", username)
    .where(Certificates.fingerprint, "=", fingerprint).execute();
}
