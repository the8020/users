import { type Row, t, table, type TableDatabase } from "/p/the8020/db/mod.ts";
import { accountInfo, preferredLanguage, userSummary } from "../types/user.ts";

const Users = table("the8020__users__users", {
  username: t.from(userSummary.shape.username).primaryKey(),
  fullName: t.from(userSummary.shape.fullName).default(""),
  language: t.from(preferredLanguage),
  passwordHash: t.text().default(""),
  enabled: t.from(userSummary.shape.enabled).default(true),
  technical: t.from(userSummary.shape.technical).default(false),
  authVersion: t.from(accountInfo.shape.authVersion).default(1),
  createdAt: t.datetime().defaultNow(),
  updatedAt: t.datetime().defaultNow(),
});

declare module "/p/the8020/db/types.ts" {
  interface Database extends TableDatabase<typeof Users> {}
}

export type UserRow = Row<typeof Users>;
export default Users;
