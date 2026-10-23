import { field, z } from "/p/the8020/db/fields.ts";

export const certificateFile = field(z.string(), {
  label: "Public certificate",
  description:
    "One public X.509 certificate in PEM or DER format, up to 64 KiB. Keep the private key on the calling client.",
});

export const certificate = z.object({
  fingerprint: field(z.string().regex(/^[a-f0-9]{64}$/), {
    label: "Fingerprint",
    description: "SHA-256 fingerprint of the enrolled X.509 certificate.",
  }),
  label: field(z.string().trim().max(100), {
    label: "Name",
    description:
      "A name identifying the client or purpose of this certificate.",
  }),
  subject: field(z.string(), {
    label: "Subject",
    description: "The subject recorded in the certificate.",
  }),
  issuer: field(z.string(), {
    label: "Issuer",
    description: "The issuer recorded in the certificate.",
  }),
  validFrom: field(z.date(), {
    label: "Valid from",
    description: "The certificate cannot authenticate before this time.",
  }),
  expiresAt: field(z.date(), {
    label: "Expires",
    description: "The certificate cannot authenticate at or after this time.",
  }),
  createdAt: field(z.date(), {
    label: "Added",
    description: "When the certificate was enrolled for this account.",
  }),
});

export const certificateRow = certificate.extend({
  validity: field(z.string(), {
    label: "Validity",
    description:
      "Time left before the certificate expires. Request a new certificate before it does.",
  }),
});
