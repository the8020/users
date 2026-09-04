import { requiredCommandArgument } from "@the8020/kernel";
import { revokeUserSessions } from "../../src/admin.ts";

export default function revokeAuthenticationSessionsForUser(...args: string[]) {
  return revokeUserSessions(requiredCommandArgument(args, 0, "username"));
}
