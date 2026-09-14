import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { invalidateSessions } from "../../src/admin.ts";

export default function invalidateUserSessions(...args: string[]) {
  return invalidateSessions(requiredCommandArgument(args, 0, "username"));
}
