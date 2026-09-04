import { requiredCommandArgument } from "@the8020/kernel";
import { revokeSession } from "../../src/admin.ts";

export default function revokeAuthenticationSession(...args: string[]) {
  return revokeSession(requiredCommandArgument(args, 0, "session ID"));
}
