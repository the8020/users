import { msg } from "/p/the8020/users/i18n/messages.ts";
import { field, z } from "/p/the8020/db/fields.ts";

export const certificateFile = field(z.string(), {
  label: msg("certificate.public_certificate"),
  description: msg("certificate.one_public_x_509_certificate_in_pem"),
});

export const certificate = z.object({
  fingerprint: field(z.string().regex(/^[a-f0-9]{64}$/), {
    label: msg("certificate.fingerprint"),
    description: msg("certificate.sha_256_fingerprint_of_the_enrolled_x"),
  }),
  label: field(z.string().trim().max(100), {
    label: msg("certificate.name"),
    description: msg("certificate.a_name_identifying_the_client_or_purpose"),
  }),
  subject: field(z.string(), {
    label: msg("certificate.subject"),
    description: msg("certificate.the_subject_recorded_in_the_certificate"),
  }),
  issuer: field(z.string(), {
    label: msg("certificate.issuer"),
    description: msg("certificate.the_issuer_recorded_in_the_certificate"),
  }),
  validFrom: field(z.date(), {
    label: msg("certificate.valid_from"),
    description: msg(
      "certificate.the_certificate_cannot_authenticate_before_this_time",
    ),
  }),
  expiresAt: field(z.date(), {
    label: msg("certificate.expires"),
    description: msg(
      "certificate.the_certificate_cannot_authenticate_at_or_after",
    ),
  }),
  createdAt: field(z.date(), {
    label: msg("certificate.added"),
    description: msg("certificate.when_the_certificate_was_enrolled_for_this"),
  }),
});

export const certificateRow = certificate.extend({
  validity: field(z.string(), {
    label: msg("certificate.validity"),
    description: msg(
      "certificate.time_left_before_the_certificate_expires_request",
    ),
  }),
});
