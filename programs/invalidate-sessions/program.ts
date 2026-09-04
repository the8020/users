import { requiredCommandArgument } from "@the8020/kernel";
import { invalidateSessions } from "../../src/admin.ts";

export default function invalidateUserSessions(...args: string[]) {
  return invalidateSessions(requiredCommandArgument(args, 0, "username"));
}
