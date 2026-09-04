import { kernel, requiredCommandArgument } from "@the8020/kernel";
import { setPassword } from "../../src/admin.ts";

export default function setUserPassword(...args: string[]) {
  return setPassword(
    requiredCommandArgument(args, 0, "username"),
    kernel.execution.secret("password"),
  );
}
