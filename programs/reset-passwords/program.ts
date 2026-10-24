import { AdminCommandError, kernel } from "@the8020/kernel";
import { resetPasswords } from "../../src/admin.ts";

export default function resetUserPasswords(...args: string[]) {
  if (args.length !== 2 || args[1] !== "--confirm") {
    throw new AdminCommandError({
      code: "invalid_arguments",
      message: "Expected <recovery-username> --confirm",
    });
  }
  return resetPasswords(args[0]!, kernel.execution.secret("password"));
}
