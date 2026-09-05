import { kernel, requiredCommandArgument } from "@the8020/kernel";
import { add } from "../../src/admin.ts";

export default function addUser(...args: string[]) {
  return add(
    requiredCommandArgument(args, 0, "username"),
    kernel.execution.optionalSecret("password"),
  );
}
