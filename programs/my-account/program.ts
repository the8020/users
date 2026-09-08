import { currentUser } from "../../mod.ts";
import { userDetail } from "../users/program.ts";

export default async function myAccount(): Promise<void> {
  const user = currentUser();
  if (user === undefined) throw new Error("Sign in to view your account.");
  await userDetail(user.username, true);
}
