import { kernel } from "@the8020/kernel";
import {
  authenticatePassword,
  eligibleUser,
  issueAllowance,
  validateSession,
} from "../../mod.ts";

export default async function authenticate(mode: string, username: string) {
  switch (mode) {
    case "allowance":
      return await issueAllowance();
    case "password":
      return await authenticatePassword(
        username,
        kernel.execution.secret("password"),
      ) !== undefined;
    case "user":
      return await eligibleUser(username) !== undefined;
    case "session":
      return (await validateSession(
        JSON.parse(kernel.execution.secret("claims")),
      ))?.username === username;
    default:
      throw new TypeError("unknown authentication operation");
  }
}
