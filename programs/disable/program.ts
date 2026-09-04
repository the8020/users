import { requiredCommandArgument } from "@the8020/kernel";
import { disable } from "../../src/admin.ts";

export default function disableUser(...args: string[]) {
  return disable(requiredCommandArgument(args, 0, "username"));
}
