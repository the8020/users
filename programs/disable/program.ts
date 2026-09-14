import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { disable } from "../../src/admin.ts";

export default function disableUser(...args: string[]) {
  return disable(requiredCommandArgument(args, 0, "username"));
}
