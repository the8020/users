import { field, z } from "/p/the8020/db/fields.ts";

export const username: z.ZodString = field(z.string(), {
  label: "User",
  description: "A user account, identified by its username.",
  valueHelp: async ({ query, offset, limit }) => {
    const { default: Users } = await import("../tables/users.ts");
    const records = await Users.select([Users.username, Users.enabled])
      .where(Users.username, "like", `%${query.trim().toLowerCase()}%`)
      .orderBy(Users.username)
      .offset(offset)
      .limit(limit + 1)
      .execute();
    return {
      items: records.slice(0, limit).map((record) => ({
        value: record.username,
        label: record.username,
        description: record.enabled ? undefined : "Disabled account",
      })),
      more: records.length > limit,
    };
  },
  open: async (value) => {
    const { default: users } = await import("../programs/users/program.ts");
    await users(value);
  },
});

export const userSummary = z.object({
  username,
  enabled: field(z.boolean(), {
    label: "Enabled",
    description: "Disabled accounts cannot sign in.",
  }),
});
