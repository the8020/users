import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { revokeSession } from "../../src/admin.ts";

export default function revokeAuthenticationSession(...args: string[]) {
  return revokeSession(requiredCommandArgument(args, 0, "session ID"));
}
