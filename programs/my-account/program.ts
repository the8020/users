import { msg } from "/p/the8020/users/i18n/messages.ts";
import { text as localizedText } from "/p/the8020/i18n/mod.ts";
import { currentUser } from "../../mod.ts";
import { userDetail } from "../users/program.ts";

export default async function myAccount(): Promise<void> {
  const user = currentUser();
  if (user === undefined) {
    throw new Error(localizedText(msg("ui.sign_in_to_view_your_account")));
  }
  await userDetail(user.username, true);
}
