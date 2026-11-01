import { msg } from "/p/the8020/users/i18n/messages.ts";
import { choiceHelp, field, z } from "/p/the8020/db/fields.ts";
import { language as languageCode } from "/p/the8020/i18n/fields.ts";

export const preferredLanguage = field(languageCode.nullable(), {
  label: msg("user.language"),
  description: msg("user.the_default_language_for_new_sessions_and"),
  valueHelp: async (request) => {
    const { getConfiguration } = await import("/p/the8020/i18n/mod.ts");
    const { queryValueHelp } = await import("/p/the8020/uui/lists.ts");
    return queryValueHelp(
      z.object({
        code: languageCode,
        name: field(z.string(), { label: msg("certificate.name") }),
      }),
      (await getConfiguration()).languages,
      request,
    );
  },
});

export const username: z.ZodString = field(z.string(), {
  label: msg("user.user"),
  description: msg("user.a_user_account_identified_by_its_username"),
  valueHelp: async (request) => {
    const { default: Users } = await import("../tables/users.ts");
    const { lookupPage } = await import("/p/the8020/db/lookup.ts");
    return lookupPage(
      z.object({
        username,
        fullName: userProfile.shape.fullName,
        enabled: userSummary.shape.enabled,
      }),
      Users.select([Users.username, Users.fullName, Users.enabled]),
      request,
    );
  },
  open: async (value) => {
    const { default: users } = await import("../programs/users/program.ts");
    await users(value);
  },
});

export const userProfile = z.object({
  language: preferredLanguage.optional(),
  fullName: field(z.string().trim().max(200), {
    label: msg("user.full_name"),
    description: msg("user.the_name_shown_alongside_this_account_optional"),
  }),
});

export const userSummary = userProfile.extend({
  username,
  enabled: field(z.boolean(), {
    label: msg("user.enabled"),
    description: msg("user.disabled_accounts_cannot_sign_in"),
  }),
});

export const newUsername = field(username, {
  label: msg("user.username"),
  description: msg("user.use_3_32_lowercase_letters_digits_or"),
  valueHelp: undefined,
  open: undefined,
});

export const accountInfo = z.object({
  userId: field(z.string(), {
    label: msg("user.user_id"),
    description: msg("user.the_account_identity_in_user_username_form"),
  }),
  signIn: field(z.string(), {
    label: msg("user.password_sign_in"),
    description: msg("user.password_and_ssh_sign_in_require_an"),
    valueHelp: choiceHelp(z.string(), [
      msg("program.allowed"),
      msg("program.disabled"),
      msg("program.no_password"),
    ]),
  }),
  activeSessions: field(z.number().int().nonnegative(), {
    label: msg("user.active_sign_ins"),
    description: msg("user.unexpired_sign_ins_that_are_still_valid"),
  }),
  created: field(z.string(), {
    label: msg("user.created"),
    description: msg("user.when_this_account_was_created"),
  }),
  updated: field(z.string(), {
    label: msg("user.last_changed"),
    description: msg("user.when_this_account_s_details_or_sign"),
  }),
  authVersion: field(z.number().int(), {
    label: msg("user.authentication_version"),
    description: msg("user.changes_when_existing_sign_ins_are_invalidated"),
  }),
  password: field(z.string(), {
    label: msg("user.password"),
    description: msg("user.enter_a_password_for_this_account_leave"),
  }),
  newPassword: field(z.string(), {
    label: msg("user.new_password"),
    description: msg("user.enter_the_replacement_password_saving_it_signs"),
  }),
  passwordConfirmation: field(z.string(), {
    label: msg("user.repeat_password"),
    description: msg("user.enter_the_same_new_password_again_to"),
  }),
});

export const authenticationSession = z.object({
  type: field(z.enum(["username", "token"]), {
    label: msg("user.type"),
    description: msg("user.a_username_sign_in_or_an_allowance"),
  }),
  transport: field(z.enum(["local", "remote"]), {
    label: msg("user.access"),
    description: msg("user.local_tokens_work_through_native_sandbox_access"),
  }),
  id: field(z.string(), {
    label: msg("user.sign_in_id"),
    description: msg("user.identifies_one_authentication_sign_in_this_is"),
  }),
  created: field(z.string(), {
    label: msg("user.signed_in"),
    description: msg("user.when_this_sign_in_was_issued"),
  }),
  expires: field(z.string(), {
    label: msg("certificate.expires"),
    description: msg("user.when_this_sign_in_expires_it_can"),
  }),
  status: field(z.string(), {
    label: msg("user.status"),
    description: msg("user.active_sign_ins_can_authenticate_requests_ended"),
    valueHelp: choiceHelp(z.string(), [
      msg("program.active"),
      msg("program.ended"),
    ]),
  }),
});
