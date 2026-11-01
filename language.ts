import Users from "./tables/users.ts";

/** Public execution principals may have no account; that means system defaults. */
export async function preferredLanguage(
  username: string,
): Promise<string | null> {
  const row = await Users.select([Users.language]).where(
    Users.username,
    "=",
    username,
  ).executeTakeFirst();
  return row?.language ?? null;
}
