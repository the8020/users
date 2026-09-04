import { requiredCommandArgument } from "@the8020/kernel";
import { enable } from "../../src/admin.ts";

export default function enableUser(...args: string[]) {
  return enable(requiredCommandArgument(args, 0, "username"));
}
