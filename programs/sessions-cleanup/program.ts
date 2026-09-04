import { cleanupSessions } from "../../src/admin.ts";

export default function cleanupAuthenticationSessions() {
  return cleanupSessions();
}
