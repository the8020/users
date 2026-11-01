import { text as localizedText } from "/p/the8020/i18n/mod.ts";
import { msg } from "/p/the8020/users/i18n/messages.ts";
import {
  BACK_EVENT,
  callScreen,
  confirmAction,
  field,
  Model,
  presentModal,
  presentPage,
  sendMessage,
  z,
} from "/p/the8020/uui/mod.ts";
import * as accounts from "../../src/admin.ts";
import {
  CERTIFICATE_URGENT_DAYS,
  nearestCertificateExpiry,
} from "../../src/certificates.ts";
import {
  accountInfo,
  authenticationSession,
  newUsername,
  username,
  userProfile,
  userSummary,
} from "../../types/user.ts";

const UserRow = userSummary.extend({
  signIn: accountInfo.shape.signIn,
  activeSessions: accountInfo.shape.activeSessions,
});
const UserList = z.object({ users: z.array(UserRow) });
const Account = UserRow.pick({
  username: true,
  fullName: true,
  signIn: true,
  activeSessions: true,
}).extend({
  username: field(username, { readOnly: true }),
  certificate: field(z.string(), {
    label: msg("program.certificate"),
    description: msg(
      "program.the_enrolled_certificate_that_expires_first_request",
    ),
  }),
});
const SignIn = authenticationSession.extend({
  created: field(authenticationSession.shape.created, {
    semanticType: "datetime",
  }),
  expires: field(authenticationSession.shape.expires, {
    semanticType: "datetime",
  }),
});
const SignIns = z.object({ sessions: z.array(SignIn) });
type User = Awaited<ReturnType<typeof accounts.user>>;

function summary(user: User): z.infer<typeof UserRow> {
  return {
    username: user.username,
    fullName: user.full_name,
    enabled: user.enabled,
    signIn: !user.enabled
      ? localizedText(msg("program.disabled"))
      : user.has_password
      ? localizedText(msg("program.allowed"))
      : localizedText(msg("program.no_password")),
    activeSessions: user.active_authentication_session_count,
  };
}

/** Open the catalog, or a particular account when following a user reference. */
export default async function usersProgram(
  selectedUsername?: string,
): Promise<void> {
  if (selectedUsername !== undefined) return await userDetail(selectedUsername);
  const model = new Model<z.infer<typeof UserList>>({ users: [] });
  while (true) {
    model.data.users = (await accounts.list()).users.map(summary);
    const event = await callScreen({
      id: "users",
      title: msg("program.users"),
      schema: UserList,
      model,
      layout: {
        schema: 1,
        id: "users",
        root: {
          toolbar: [
            { id: "add", label: msg("program.add_user"), kind: "primary" },
            { id: "refresh", label: msg("certificates.refresh") },
          ],
          type: "list",
          bind: "users",
          key: "username",
          display: ["username", "fullName", "signIn", "activeSessions"],
        },
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action === "add") {
      const created = await presentModal(() => createUser());
      if (created !== undefined) await presentPage(() => userDetail(created));
    }
    if (event.action === "select" && typeof event.value === "string") {
      await presentPage(() => userDetail(event.value as string));
    }
  }
}

export async function userDetail(
  name: string,
  selfService = false,
): Promise<void> {
  let model: Model<z.infer<typeof Account>> | undefined;
  let warned = false;
  while (true) {
    let user: User;
    try {
      user = await accounts.user(name);
    } catch (error) {
      showError(error);
      return;
    }
    // Certificate listing has its own permission; omit the summary without it.
    const expiry = await nearestCertificateExpiry(name).catch(() => undefined);
    const certificate = expiry === undefined
      ? ""
      : `${expiry.label}: ${expiry.text.toLowerCase()} (${
        expiry.expiresAt.toISOString().slice(0, 10)
      })`;
    if (
      selfService && !warned && expiry !== undefined &&
      expiry.days < CERTIFICATE_URGENT_DAYS
    ) {
      warned = true;
      sendMessage(
        localizedText(
          msg(
            "program.your_certificate_certificate_request_a_new_certificate",
            { certificate: certificate },
          ),
        ),
        "warning",
      );
    }
    model ??= new Model({ ...summary(user), certificate });
    Object.assign(model.data, summary(user), { certificate });
    const details = ["username", "fullName", "signIn", "activeSessions"];
    if (certificate) details.push("certificate");
    const event = await callScreen({
      id: selfService ? "my-account" : "user-detail",
      title: selfService
        ? localizedText(msg("program.my_account"))
        : localizedText(msg("ui.user_name", { name })),
      schema: Account,
      model,
      controls: [
        { id: "username", bind: "username", readOnly: true },
        { id: "fullName", bind: "fullName", readOnly: true, length: "long" },
        { id: "signIn", bind: "signIn", readOnly: true, length: "short" },
        {
          id: "activeSessions",
          bind: "activeSessions",
          readOnly: true,
          length: "short",
        },
        ...(certificate
          ? [{
            id: "certificate",
            bind: "certificate",
            readOnly: true,
            length: "long" as const,
          }]
          : []),
      ],
      layout: {
        schema: 1,
        id: "user-detail",
        root: {
          type: "detail",
          controls: details,
          actions: [
            "sign-ins",
            "certificates",
            "ui-sessions",
            selfService ? "my-roles" : "roles",
          ],
        },
      },
      actions: [
        { id: "sign-ins", label: msg("program.sign_ins") },
        { id: "certificates", label: msg("program.certificates") },
        { id: "ui-sessions", label: msg("program.open_sessions") },
        selfService
          ? { id: "my-roles", label: msg("program.my_roles") }
          : { id: "roles", label: msg("program.roles") },
      ],
      header: {
        actions: [
          { id: "edit", label: msg("program.edit_details"), kind: "primary" },
          {
            id: "password",
            label: user.has_password
              ? localizedText(msg("program.change_password"))
              : localizedText(msg("program.set_password")),
          },
          ...(!selfService
            ? [{
              id: "enabled",
              label: user.enabled
                ? localizedText(msg("program.disable_user"))
                : localizedText(msg("program.enable_user")),
            }, { id: "advanced", label: msg("program.advanced") }]
            : []),
          { id: "refresh", label: msg("certificates.refresh") },
        ],
      },
    });
    if (event.action === BACK_EVENT) return;
    try {
      if (event.action === "edit") {
        await presentModal(() => editDetails(user));
      }
      if (event.action === "password") {
        await presentModal(() => changePassword(user, !selfService));
      }
      if (!selfService && event.action === "enabled") {
        if (
          !user.enabled ||
          await confirm(
            localizedText(msg("program.disable_name", { name: name })),
            localizedText(
              msg(
                "ui.they_will_be_signed_out_and_cannot_sign_in_until_enabled_again",
              ),
            ),
            localizedText(msg("ui.disable_user")),
          )
        ) {
          await (user.enabled ? accounts.disable(name) : accounts.enable(name));
          sendMessage(
            user.enabled
              ? localizedText(msg("program.user_disabled"))
              : localizedText(msg("program.user_enabled")),
            "success",
          );
        }
      }
      if (event.action === "sign-ins") await presentPage(() => signIns(name));
      if (event.action === "certificates") {
        const { userCertificates } = await import("./certificates.ts");
        await presentPage(() => userCertificates(name));
      }
      if (!selfService && event.action === "roles") {
        const { default: roles } = await import(
          "/p/the8020/auth/programs/user-roles/program.ts"
        );
        await presentPage(() => roles(name));
      }
      if (selfService && event.action === "my-roles") {
        const { default: ownRoles } = await import(
          "/p/the8020/auth/programs/my-roles/program.ts"
        );
        await presentPage(() => ownRoles());
      }
      if (event.action === "ui-sessions") {
        const { default: sessions } = await import(
          "/p/the8020/uui/programs/sessions/program.ts"
        );
        await presentPage(() => sessions(name));
      }
      if (
        !selfService && event.action === "advanced" &&
        await presentPage(() => advanced(user))
      ) return;
    } catch (error) {
      showError(error);
    }
  }
}

async function editDetails(user: User): Promise<void> {
  const model = new Model({
    fullName: user.full_name,
    language: user.language,
  });
  while (true) {
    const event = await callScreen({
      id: "user-edit",
      title: msg("program.edit_details"),
      schema: userProfile,
      model,
      controls: [{ bind: "fullName", length: "long" }, { bind: "language" }],
      header: {
        actions: [{
          id: "save",
          label: msg("program.save_details"),
          kind: "primary",
        }],
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action !== "save") continue;
    try {
      await accounts.updateDetails(user.username, model.data);
      sendMessage(localizedText(msg("program.user_details_saved")), "success");
      return;
    } catch (error) {
      showError(error);
    }
  }
}

async function createUser(): Promise<string | undefined> {
  const Screen = userProfile.extend({
    username: field(newUsername, { length: "long" }),
    password: field(accountInfo.shape.password, {
      control: "password",
      length: "long",
    }),
  });
  const model = new Model({ username: "", fullName: "", password: "" });
  while (true) {
    const event = await callScreen({
      id: "user-add",
      title: msg("program.add_user"),
      schema: Screen,
      model,
      controls: [{ bind: "username" }, { bind: "fullName" }, {
        bind: "password",
      }],
      header: {
        actions: [{
          id: "create",
          label: msg("program.create_user"),
          kind: "primary",
        }],
      },
    });
    if (event.action === BACK_EVENT) {
      model.data.password = "";
      return;
    }
    if (event.action !== "create") continue;
    try {
      await accounts.add(
        model.data.username,
        model.data.password,
        model.data.fullName,
      );
      sendMessage(
        localizedText(
          msg("program.created_value1", { value1: model.data.username }),
        ),
        "success",
      );
      return model.data.username;
    } catch (error) {
      showError(error);
    } finally {
      model.data.password = "";
    }
  }
}

async function changePassword(user: User, allowRemoval = true): Promise<void> {
  const Screen = z.object({
    password: field(accountInfo.shape.newPassword, {
      control: "password",
      length: "long",
    }),
    confirmation: field(accountInfo.shape.passwordConfirmation, {
      control: "password",
      length: "long",
    }),
  });
  const model = new Model({ password: "", confirmation: "" });
  while (true) {
    const event = await callScreen({
      id: "user-password",
      title: msg("program.password_for_value1", { value1: user.username }),
      schema: Screen,
      model,
      description: msg("program.changing_the_password_signs_out_existing_sign"),
      controls: [{ bind: "password" }, { bind: "confirmation" }],
      header: {
        actions: [
          { id: "save", label: msg("program.save_password"), kind: "primary" },
          ...(allowRemoval && user.has_password
            ? [{
              id: "remove",
              label: msg("program.remove_password"),
              kind: "danger" as const,
            }]
            : []),
        ],
      },
    });
    if (event.action === BACK_EVENT) {
      model.data.password = model.data.confirmation = "";
      return;
    }
    try {
      if (allowRemoval && event.action === "remove") {
        if (
          !await confirm(
            localizedText(
              msg("program.remove_the_password_for_value1", {
                value1: user.username,
              }),
            ),
            localizedText(
              msg(
                "ui.password_sign_ins_will_end_enrolled_certificates_remain_usable_while_the_account_is_e",
              ),
            ),
            localizedText(msg("ui.remove_password")),
          )
        ) continue;
        await accounts.setPassword(user.username, "");
        sendMessage(localizedText(msg("program.password_removed")), "success");
        return;
      }
      if (event.action !== "save") continue;
      if (!model.data.password) {
        throw new Error(localizedText(msg("ui.enter_a_new_password")));
      }
      if (model.data.password !== model.data.confirmation) {
        throw new Error(localizedText(msg("ui.the_passwords_do_not_match")));
      }
      await accounts.setPassword(user.username, model.data.password);
      sendMessage(localizedText(msg("program.password_updated")), "success");
      return;
    } catch (error) {
      showError(error);
    } finally {
      model.data.password = model.data.confirmation = "";
    }
  }
}

async function signIns(name: string): Promise<void> {
  const model = new Model<z.infer<typeof SignIns>>({ sessions: [] });
  while (true) {
    const sessions =
      (await accounts.listSessions(name)).authentication_sessions;
    model.data.sessions = sessions.map((session) => ({
      id: session.session_id,
      type: session.type,
      transport: session.transport,
      created: session.created_at,
      expires: session.expires_at,
      status: session.valid
        ? localizedText(msg("program.active"))
        : localizedText(msg("program.ended")),
    }));
    const event = await callScreen({
      id: "user-sign-ins",
      title: msg("program.sign_ins_for_name", { name: name }),
      schema: SignIns,
      model,
      layout: {
        schema: 1,
        id: "user-sign-ins",
        root: {
          toolbar: [
            {
              id: "sign-out",
              label: msg("program.sign_out_all"),
              kind: "danger",
            },
            { id: "refresh", label: msg("certificates.refresh") },
          ],
          type: "list",
          bind: "sessions",
          key: "id",
          display: ["type", "transport", "created", "expires", "status"],
        },
      },
    });
    if (event.action === BACK_EVENT) return;
    if (
      event.action === "sign-out" &&
      await confirm(
        localizedText(msg("program.sign_out_name", { name: name })),
        localizedText(
          msg(
            "ui.all_current_sign_ins_will_end_they_can_sign_in_again_with_their_password",
          ),
        ),
        localizedText(msg("ui.sign_out_all")),
      )
    ) {
      await accounts.invalidateSessions(name);
      sendMessage(localizedText(msg("program.all_sign_ins_ended")), "success");
    }
    if (event.action === "select" && typeof event.value === "string") {
      const session = sessions.find((item) => item.session_id === event.value);
      if (session === undefined) continue;
      const selected = model.data.sessions.find((item) =>
        item.id === session.session_id
      )!;
      const end = await presentModal(async () => {
        const event = await callScreen({
          id: "user-sign-in",
          title: msg("program.sign_in_for_name", { name: name }),
          schema: SignIn.pick({ created: true, expires: true, status: true }),
          model: new Model(selected),
          controls: ["created", "expires", "status"].map((bind) => ({
            bind,
            readOnly: true,
          })),
          header: {
            actions: session.valid
              ? [{
                id: "sign-out",
                label: msg("program.sign_out"),
                kind: "danger",
              }]
              : [],
          },
        });
        return event.action === "sign-out";
      });
      if (end) {
        await accounts.revokeSession(session.session_id);
        sendMessage(localizedText(msg("program.sign_in_ended")), "success");
      }
    }
  }
}

async function advanced(user: User): Promise<boolean> {
  const Screen = z.object({
    created: field(accountInfo.shape.created, { readOnly: true }),
    updated: field(accountInfo.shape.updated, { readOnly: true }),
    authVersion: field(accountInfo.shape.authVersion, { readOnly: true }),
  });
  const model = new Model({
    created: user.created_at,
    updated: user.updated_at,
    authVersion: user.auth_version,
  });
  while (true) {
    const event = await callScreen({
      id: "user-advanced",
      title: msg("program.advanced_value1", { value1: user.username }),
      schema: Screen,
      model,
      controls: [{ bind: "created" }, { bind: "updated" }, {
        bind: "authVersion",
      }],
      header: {
        actions: [{
          id: "delete",
          label: msg("program.delete_user"),
          kind: "danger",
        }],
      },
    });
    if (event.action === BACK_EVENT) return false;
    if (
      event.action === "delete" &&
      await confirm(
        localizedText(msg("program.delete_value1", { value1: user.username })),
        localizedText(msg("ui.the_account_and_its_sign_ins_will_be_removed")),
        localizedText(msg("ui.delete_user")),
      )
    ) {
      await accounts.remove(user.username);
      sendMessage(localizedText(msg("program.user_deleted")), "success");
      return true;
    }
  }
}

function confirm(
  title: string,
  message: string,
  label: string,
): Promise<boolean> {
  return confirmAction({
    id: "user-confirm",
    title,
    message,
    confirm: label,
    cancel: msg("program.cancel"),
  });
}

function showError(error: unknown): void {
  sendMessage(
    error instanceof Error
      ? error.message
      : localizedText(msg("program.the_account_could_not_be_updated")),
    "error",
  );
}
