import { text } from "/p/the8020/i18n/mod.ts";
import { msg } from "/p/the8020/users/i18n/messages.ts";
import { currentUser } from "../../mod.ts";
import {
  CERTIFICATE_WARNING_DAYS,
  nearestCertificateExpiry,
} from "../../src/certificates.ts";

/** Live status for the Home My account tile: only an expiring certificate. */
export default async function myAccountStatus() {
  const user = currentUser();
  if (user === undefined) return {};
  const expiry = await nearestCertificateExpiry(user.username);
  if (expiry === undefined || expiry.days >= CERTIFICATE_WARNING_DAYS) {
    return {};
  }
  const label = expiry.label.length > 60
    ? `${expiry.label.slice(0, 59)}…`
    : expiry.label;
  return {
    value: expiry.days === 0
      ? text(msg("widgets.lessDay"))
      : text(msg("widgets.days", { count: expiry.days })),
    detail: text(
      msg("widgets.certificateExpires", {
        label,
        date: expiry.expiresAt.toISOString().slice(0, 10),
      }),
    ),
    status: expiry.status,
  };
}
