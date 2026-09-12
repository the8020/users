import {
  BACK_EVENT,
  callScreen,
  field,
  Model,
  presentModal,
  presentPage,
  sendMessage,
  z,
} from "/p/the8020/uui/mod.ts";
import * as accounts from "../../src/admin.ts";
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
      ? "Disabled"
      : user.has_password
      ? "Allowed"
      : "No password",
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
      title: "Users",
      schema: UserList,
      model,
      layout: {
        schema: 1,
        id: "users",
        root: {
          type: "list",
          bind: "users",
          key: "username",
          display: ["username", "fullName", "signIn", "activeSessions"],
        },
      },
      header: {
        actions: [
          { id: "add", label: "Add user", kind: "primary" },
          { id: "refresh", label: "Refresh" },
        ],
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
  while (true) {
    let user: User;
    try {
      user = await accounts.user(name);
    } catch (error) {
      showError(error);
      return;
    }
    model ??= new Model(summary(user));
    Object.assign(model.data, summary(user));
    const event = await callScreen({
      id: selfService ? "my-account" : "user-detail",
      title: selfService ? "My account" : `User ${name}`,
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
      ],
      layout: {
        schema: 1,
        id: "user-detail",
        root: {
          type: "detail",
          controls: ["username", "fullName", "signIn", "activeSessions"],
          actions: [
            "sign-ins",
            "ui-sessions",
            ...(!selfService ? ["roles"] : []),
          ],
        },
      },
      actions: [
        { id: "sign-ins", label: "Sign-ins" },
        { id: "ui-sessions", label: "Open sessions" },
        ...(!selfService ? [{ id: "roles", label: "Roles" }] : []),
      ],
      header: {
        actions: [
          { id: "edit", label: "Edit details", kind: "primary" },
          {
            id: "password",
            label: user.has_password ? "Change password" : "Set password",
          },
          ...(!selfService
            ? [{
              id: "enabled",
              label: user.enabled ? "Disable user" : "Enable user",
            }, { id: "advanced", label: "Advanced" }]
            : []),
          { id: "refresh", label: "Refresh" },
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
            `Disable ${name}?`,
            "They will be signed out and cannot sign in until enabled again.",
            "Disable user",
          )
        ) {
          await (user.enabled ? accounts.disable(name) : accounts.enable(name));
          sendMessage(
            user.enabled ? "User disabled" : "User enabled",
            "success",
          );
        }
      }
      if (event.action === "sign-ins") await presentPage(() => signIns(name));
      if (!selfService && event.action === "roles") {
        const { default: roles } = await import(
          "/p/the8020/auth/programs/user-roles/program.ts"
        );
        await presentPage(() => roles(name));
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
  const model = new Model({ fullName: user.full_name });
  while (true) {
    const event = await callScreen({
      id: "user-edit",
      title: "Edit details",
      schema: userProfile,
      model,
      controls: [{ bind: "fullName", length: "long" }],
      header: {
        actions: [{ id: "save", label: "Save details", kind: "primary" }],
      },
    });
    if (event.action === BACK_EVENT) return;
    if (event.action !== "save") continue;
    try {
      await accounts.updateDetails(user.username, model.data);
      sendMessage("User details saved", "success");
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
      title: "Add user",
      schema: Screen,
      model,
      controls: [{ bind: "username" }, { bind: "fullName" }, {
        bind: "password",
      }],
      header: {
        actions: [{ id: "create", label: "Create user", kind: "primary" }],
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
      sendMessage(`Created ${model.data.username}`, "success");
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
      title: `Password for ${user.username}`,
      schema: Screen,
      model,
      description: "Changing the password signs out existing sign-ins.",
      controls: [{ bind: "password" }, { bind: "confirmation" }],
      header: {
        actions: [
          { id: "save", label: "Save password", kind: "primary" },
          ...(allowRemoval && user.has_password
            ? [{
              id: "remove",
              label: "Remove password",
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
            `Remove the password for ${user.username}?`,
            "They will be signed out and cannot sign in until a new password is set.",
            "Remove password",
          )
        ) continue;
        await accounts.setPassword(user.username, "");
        sendMessage("Password removed", "success");
        return;
      }
      if (event.action !== "save") continue;
      if (!model.data.password) throw new Error("Enter a new password.");
      if (model.data.password !== model.data.confirmation) {
        throw new Error("The passwords do not match.");
      }
      await accounts.setPassword(user.username, model.data.password);
      sendMessage("Password updated", "success");
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
      status: session.valid ? "Active" : "Ended",
    }));
    const event = await callScreen({
      id: "user-sign-ins",
      title: `Sign-ins for ${name}`,
      schema: SignIns,
      model,
      layout: {
        schema: 1,
        id: "user-sign-ins",
        root: {
          type: "list",
          bind: "sessions",
          key: "id",
          display: ["type", "transport", "created", "expires", "status"],
        },
      },
      header: {
        actions: [
          { id: "sign-out", label: "Sign out all", kind: "danger" },
          { id: "refresh", label: "Refresh" },
        ],
      },
    });
    if (event.action === BACK_EVENT) return;
    if (
      event.action === "sign-out" &&
      await confirm(
        `Sign out ${name}?`,
        "All current sign-ins will end. They can sign in again with their password.",
        "Sign out all",
      )
    ) {
      await accounts.invalidateSessions(name);
      sendMessage("All sign-ins ended", "success");
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
          title: `Sign-in for ${name}`,
          schema: SignIn.pick({ created: true, expires: true, status: true }),
          model: new Model(selected),
          controls: ["created", "expires", "status"].map((bind) => ({
            bind,
            readOnly: true,
          })),
          header: {
            actions: session.valid
              ? [{ id: "sign-out", label: "Sign out", kind: "danger" }]
              : [],
          },
        });
        return event.action === "sign-out";
      });
      if (end) {
        await accounts.revokeSession(session.session_id);
        sendMessage("Sign-in ended", "success");
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
      title: `Advanced · ${user.username}`,
      schema: Screen,
      model,
      controls: [{ bind: "created" }, { bind: "updated" }, {
        bind: "authVersion",
      }],
      header: {
        actions: [{ id: "delete", label: "Delete user", kind: "danger" }],
      },
    });
    if (event.action === BACK_EVENT) return false;
    if (
      event.action === "delete" &&
      await confirm(
        `Delete ${user.username}?`,
        "The account and its sign-ins will be removed.",
        "Delete user",
      )
    ) {
      await accounts.remove(user.username);
      sendMessage("User deleted", "success");
      return true;
    }
  }
}

async function confirm(
  title: string,
  description: string,
  label: string,
): Promise<boolean> {
  return await presentModal(async () => {
    const event = await callScreen({
      id: "user-confirm",
      title,
      description,
      schema: z.object({}),
      model: new Model({}),
      actions: [{ id: "cancel", label: "Cancel" }, {
        id: "confirm",
        label,
        kind: "danger",
      }],
    });
    return event.action === "confirm";
  });
}

function showError(error: unknown): void {
  sendMessage(
    error instanceof Error
      ? error.message
      : "The account could not be updated.",
    "error",
  );
}
