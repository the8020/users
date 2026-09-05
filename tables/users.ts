import { type Row, t, table, type TableDatabase } from "/p/the8020/db/mod.ts";

const Users = table("the8020__users__users", {
  username: t.text().primaryKey(),
  passwordHash: t.text().default(""),
  enabled: t.boolean().default(true),
  authVersion: t.integer().default(1),
  createdAt: t.datetime().defaultNow(),
  updatedAt: t.datetime().defaultNow(),
});

declare module "/p/the8020/db/types.ts" {
  interface Database extends TableDatabase<typeof Users> {}
}

export type UserRow = Row<typeof Users>;
export default Users;
