import { type Row, t, table, type TableDatabase } from "@the8020/db";

const Users = table("the8020__users__users", {
  username: t.text().primaryKey(),
  passwordHash: t.text(),
  enabled: t.boolean().default(true),
  authVersion: t.integer().default(1),
  createdAt: t.datetime().defaultNow(),
  updatedAt: t.datetime().defaultNow(),
});

declare module "@the8020/db/types" {
  interface Database extends TableDatabase<typeof Users> {}
}

export type UserRow = Row<typeof Users>;
export default Users;
