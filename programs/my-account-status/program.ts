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
      ? "< 1 day"
      : `${expiry.days} ${expiry.days === 1 ? "day" : "days"}`,
    detail: `Certificate ${label} expires on ${
      expiry.expiresAt.toISOString().slice(0, 10)
    }. Request a new one.`,
    status: expiry.status,
  };
}
