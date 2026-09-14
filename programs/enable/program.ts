import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { enable } from "../../src/admin.ts";

export default function enableUser(...args: string[]) {
  return enable(requiredCommandArgument(args, 0, "username"));
}
