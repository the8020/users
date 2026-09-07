import { type Row, t, table, type TableDatabase } from "/p/the8020/db/mod.ts";
import { username } from "../types/user.ts";

const Sessions = table("the8020__users__sessions", {
  sessionId: t.text().primaryKey(),
  username: t.from(username),
  authVersion: t.integer(),
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
