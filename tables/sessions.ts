import { type Row, t, table, type TableDatabase } from "/p/the8020/db/mod.ts";
import { accountInfo, authenticationSession, username } from "../types/user.ts";

const Sessions = table("the8020__users__sessions", {
  sessionId: t.from(authenticationSession.shape.id).primaryKey(),
  username: t.from(username),
  type: t.from(authenticationSession.shape.type).default("username"),
  transport: t.from(authenticationSession.shape.transport).default("remote"),
  authVersion: t.from(accountInfo.shape.authVersion),
  createdAt: t.datetime().defaultNow(),
  expiresAt: t.datetime(),
}, {
  indexes: [
    { columns: ["username"] },
    { columns: ["expiresAt"] },
  ],
});

declare module "/p/the8020/db/types.ts" {
  interface Database extends TableDatabase<typeof Sessions> {}
}

export type AuthenticationSessionRow = Row<typeof Sessions>;
export default Sessions;
