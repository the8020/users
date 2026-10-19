import { list } from "../../src/admin.ts";

/** Live status for the Home Users tile. */
export default async function usersStatus() {
  const { users } = await list();
  const signedIn =
    users.filter((user) => user.active_authentication_session_count > 0).length;
  const disabled = users.filter((user) => !user.enabled).length;
  return {
    value: users.length,
    detail: `${signedIn} signed in${disabled ? `, ${disabled} disabled` : ""}`,
  };
}
