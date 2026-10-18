import { t, table, type TableDatabase } from "/p/the8020/db/mod.ts";
import { certificate } from "../types/certificate.ts";
import { username } from "../types/user.ts";
import Users from "./users.ts";

const Certificates = table("the8020__users__certificates", {
  fingerprint: t.from(certificate.shape.fingerprint).primaryKey(),
  username: t.from(username).references(() => Users.username),
  label: t.from(certificate.shape.label),
  subject: t.from(certificate.shape.subject),
  issuer: t.from(certificate.shape.issuer),
  validFrom: t.from(certificate.shape.validFrom),
  expiresAt: t.from(certificate.shape.expiresAt),
  createdAt: t.from(certificate.shape.createdAt).defaultNow(),
}, { indexes: [{ columns: ["username"] }] });

declare module "/p/the8020/db/types.ts" {
  interface Database extends TableDatabase<typeof Certificates> {}
}

export default Certificates;
