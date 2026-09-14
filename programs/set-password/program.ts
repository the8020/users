import { kernel } from "@the8020/kernel";
import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { setPassword } from "../../src/admin.ts";

export default function setUserPassword(...args: string[]) {
  return setPassword(
    requiredCommandArgument(args, 0, "username"),
    kernel.execution.secret("password"),
  );
}
