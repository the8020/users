import { requiredCommandArgument } from "@the8020/kernel";
import { remove } from "../../src/admin.ts";

export default function removeUser(...args: string[]) {
  return remove(requiredCommandArgument(args, 0, "username"));
}
