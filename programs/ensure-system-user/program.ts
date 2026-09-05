import Users from "../../tables/users.ts";

const systemUsername = "system";

export default async function ensureSystemUser() {
  const now = new Date();
  await Users.insert({
    username: systemUsername,
    passwordHash: "",
    enabled: true,
    authVersion: 1,
    createdAt: now,
    updatedAt: now,
  }).onConflict((conflict) => conflict.column("username").doNothing())
    .execute();
}
