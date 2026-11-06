import { kernel } from "@the8020/kernel";
import {
  parseCommandArguments,
  requiredCommandArgument,
} from "/p/the8020/packages/commands.ts";
import { add } from "../../src/admin.ts";

export default function addUser(...args: string[]) {
  const { positionals, options } = parseCommandArguments(args, {
    booleans: ["technical"],
  });
  return add(
    requiredCommandArgument(positionals, 0, "username"),
    kernel.execution.optionalSecret("password"),
    "",
    options.technical === true,
  );
}
