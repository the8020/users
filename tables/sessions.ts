import { type Row, t, table, type TableDatabase } from "@the8020/db";

const Sessions = table("the8020__users__sessions", {
  sessionId: t.text().primaryKey(),
  username: t.text(),
  secretHash: t.text(),
  authVersion: t.integer(),
  createdAt: t.datetime().defaultNow(),
  expiresAt: t.datetime(),
}, {
  indexes: [
    { columns: ["username"] },
    { columns: ["expiresAt"] },
  ],
});

declare module "@the8020/db/types" {
  interface Database extends TableDatabase<typeof Sessions> {}
}

export type AuthenticationSessionRow = Row<typeof Sessions>;
export default Sessions;
