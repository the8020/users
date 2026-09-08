import { field, z } from "/p/the8020/db/fields.ts";

export const username: z.ZodString = field(z.string(), {
  label: "User",
  description: "A user account, identified by its username.",
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
  fullName: field(z.string().trim().max(200), {
    label: "Full name",
    description:
      "The name shown alongside this account. Optional, up to 200 characters.",
  }),
});

export const userSummary = userProfile.extend({
  username,
  enabled: field(z.boolean(), {
    label: "Enabled",
    description: "Disabled accounts cannot sign in.",
  }),
});

export const newUsername = field(username, {
  label: "Username",
  description:
    "Use 3–32 lowercase letters or digits for the new account's username.",
  valueHelp: undefined,
  open: undefined,
});

export const accountInfo = z.object({
  userId: field(z.string(), {
    label: "User ID",
    description:
      "The account identity in `user:<username>` form, used to identify its authenticated work.",
  }),
  signIn: field(z.string(), {
    label: "Sign-in",
    description:
      "Sign-in is allowed only when the account is enabled and has a password.",
  }),
  activeSessions: field(z.number().int().nonnegative(), {
    label: "Active sign-ins",
    description:
      "Unexpired sign-ins that are still valid for this enabled account. Open sessions shows its separate UUI work.",
  }),
  created: field(z.string(), {
    label: "Created",
    description: "When this account was created.",
  }),
  updated: field(z.string(), {
    label: "Last changed",
    description:
      "When this account's details or sign-in settings were last changed.",
  }),
  authVersion: field(z.number().int(), {
    label: "Authentication version",
    description:
      "Changes when existing sign-ins are invalidated. Only sign-ins with the current version remain valid.",
  }),
  password: field(z.string(), {
    label: "Password",
    description:
      "Enter a password for this account. Leave empty when creating an account that cannot sign in.",
  }),
  newPassword: field(z.string(), {
    label: "New password",
    description:
      "Enter the replacement password. Saving it signs out existing sign-ins.",
  }),
  passwordConfirmation: field(z.string(), {
    label: "Repeat password",
    description: "Enter the same new password again to confirm it.",
  }),
});

export const authenticationSession = z.object({
  id: field(z.string(), {
    label: "Sign-in ID",
    description:
      "Identifies one authentication sign-in. This is separate from an open UUI session.",
  }),
  created: field(z.string(), {
    label: "Signed in",
    description: "When this sign-in was issued.",
  }),
  expires: field(z.string(), {
    label: "Expires",
    description:
      "When this sign-in expires. It can end earlier through sign-out or account changes.",
  }),
  status: field(z.string(), {
    label: "Status",
    description:
      "Active sign-ins can authenticate requests. Ended sign-ins are expired, revoked, or invalidated by account changes.",
  }),
});
