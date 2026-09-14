import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { remove } from "../../src/admin.ts";

export default function removeUser(...args: string[]) {
  return remove(requiredCommandArgument(args, 0, "username"));
}
