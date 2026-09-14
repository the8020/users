import { kernel } from "@the8020/kernel";
import { requiredCommandArgument } from "/p/the8020/packages/commands.ts";
import { add } from "../../src/admin.ts";

export default function addUser(...args: string[]) {
  return add(
    requiredCommandArgument(args, 0, "username"),
    kernel.execution.optionalSecret("password"),
  );
}
