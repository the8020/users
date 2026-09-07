import { type Row, t, table, type TableDatabase } from "/p/the8020/db/mod.ts";
import { userSummary } from "../types/user.ts";

const Users = table("the8020__users__users", {
  username: t.from(userSummary.shape.username).primaryKey(),
  passwordHash: t.text().default(""),
  enabled: t.from(userSummary.shape.enabled).default(true),
  authVersion: t.integer().default(1),
  createdAt: t.datetime().defaultNow(),
  updatedAt: t.datetime().defaultNow(),
});

declare module "/p/the8020/db/types.ts" {
  interface Database extends TableDatabase<typeof Users> {}
}

export type UserRow = Row<typeof Users>;
export default Users;
