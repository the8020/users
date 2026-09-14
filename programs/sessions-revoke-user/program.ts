import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { revokeUserSessions } from "../../src/admin.ts";

export default function revokeAuthenticationSessionsForUser(...args: string[]) {
  return revokeUserSessions(requiredCommandArgument(args, 0, "username"));
}
