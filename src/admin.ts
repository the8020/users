import { db, type Selectable, sql } from "/p/the8020/db/mod.ts";
import type { Database } from "/p/the8020/db/types.ts";
import { AdminCommandError, kernel } from "@the8020/kernel";
import { hashPassword } from "./password.ts";
import type { Kysely, Transaction } from "/p/the8020/db/kysely.ts";
import Sessions from "../tables/sessions.ts";
import Certificates from "../tables/certificates.ts";
import Users, { type UserRow } from "../tables/users.ts";
import { userProfile } from "../types/user.ts";
import type { z } from "/p/the8020/db/fields.ts";
import { context } from "@the8020/context";
import { filter, requirePermission } from "/p/the8020/auth/mod.ts";

type User = Selectable<UserRow>;
type PublicUser = Omit<User, "passwordHash"> & { passwordSet: number };
type Queryable = Pick<Kysely<Database>, "selectFrom">;
type DatabaseTransaction = Transaction<Database>;
// Return only a non-secret integer flag; CASE has the same result on both engines.
const passwordSet = sql<number>`CASE WHEN ${
  sql.ref(Users.passwordHash)
} = '' THEN 0 ELSE 1 END`.as("passwordSet");

function validateUsername(username: string): void {
  if (!/^[a-z0-9][a-z0-9_-]{1,30}[a-z0-9]$/.test(username)) {
    throw new AdminCommandError({
      code: "invalid_arguments",
      message:
        "username must contain 3-32 lowercase letters, digits, _ or -, starting and ending with a letter or digit",
    });
  }
}

function summarize(record: PublicUser, activeSessions: number) {
  return {
    username: record.username,
    full_name: record.fullName,
    enabled: record.enabled,
    has_password: record.passwordSet === 1,
    auth_version: record.authVersion,
    created_at: record.createdAt.toISOString(),
    updated_at: record.updatedAt.toISOString(),
    active_authentication_session_count: activeSessions,
  };
}

const VIEW = "the8020.users.user.view";

/** Reading another account requires view; your own account is always visible. */
async function requireView(username: string) {
  if (!context.authenticated || context.username !== username) {
    await requirePermission(VIEW, username);
  }
}

/** Keep rows of accounts the current user may view or owns; never audits. */
async function viewable<T extends { username: string }>(
  rows: T[],
): Promise<T[]> {
  const own = (row: T) =>
    context.authenticated && row.username === context.username;
  const allowed = new Set(
    await filter(
      context.username,
      rows.filter((row) => !own(row)),
      { username: VIEW } as Partial<Record<keyof T, string>>,
    ),
  );
  return rows.filter((row) => own(row) || allowed.has(row));
}

export async function user(username: string, database: Queryable = db) {
  await requireView(username);
  return await readUser(username, database);
}

/** Unchecked read for results of operations that were already authorized. */
async function readUser(username: string, database: Queryable = db) {
  const record = await database.selectFrom(Users.table)
    .select([
      Users.username,
      Users.fullName,
      Users.enabled,
      passwordSet,
      Users.authVersion,
      Users.createdAt,
      Users.updatedAt,
    ])
    .where(Users.username, "=", username)
    .executeTakeFirst();
  if (record === undefined) {
    throw new AdminCommandError({
      code: "not_found",
      message: `user ${username} was not found`,
    });
  }
  if (!record.enabled || record.passwordSet === 0) return summarize(record, 0);
  const count = await database.selectFrom(Sessions.table)
    .select((expression) => expression.fn.countAll<number>().as("count"))
    .where(Sessions.username, "=", username)
    .where(Sessions.authVersion, "=", record.authVersion)
    .where(Sessions.expiresAt, ">", new Date())
    .executeTakeFirstOrThrow();
  return summarize(record, count.count);
}

export async function add(username: string, password = "", fullName = "") {
  validateUsername(username);
  await requirePermission("the8020.users.user.create", username);
  const profile = userProfile.parse({ fullName });
  const passwordHash = password === ""
    ? ""
    : await hashPassword(username, password);
  const now = new Date();
  const result = await Users.insert({
    username,
    ...profile,
    passwordHash,
    enabled: true,
    authVersion: 1,
    createdAt: now,
    updatedAt: now,
  }).onConflict((conflict) => conflict.column("username").doNothing())
    .executeTakeFirst();
  if (result.numInsertedOrUpdatedRows === 0n) {
    throw new AdminCommandError({
      code: "conflict",
      message: `user ${username} already exists`,
    });
  }
  try {
    await kernel.events.emit("users.created", { username });
  } catch (error) {
    throw new AdminCommandError({
      code: "runtime_operation",
      message:
        `User ${username} was created; event publication failed: ${error}`,
    });
  }
  return { user: await readUser(username) };
}

export async function list() {
  const now = new Date();
  const [records, sessions] = await Promise.all([
    Users.select([
      Users.username,
      Users.fullName,
      Users.enabled,
      passwordSet,
      Users.authVersion,
      Users.createdAt,
      Users.updatedAt,
    ]).orderBy(Users.username).execute(),
    Sessions.select([Sessions.username, Sessions.authVersion])
      .where(Sessions.expiresAt, ">", now)
      .execute(),
  ]);
  const users = new Map(records.map((record) => [record.username, record]));
  const counts = new Map<string, number>();
  for (const session of sessions) {
    const account = users.get(session.username);
    if (
      account?.enabled && account.passwordSet === 1 &&
      account.authVersion === session.authVersion
    ) {
      counts.set(session.username, (counts.get(session.username) ?? 0) + 1);
    }
  }
  return {
    users: await viewable(
      records.map((record) =>
        summarize(record, counts.get(record.username) ?? 0)
      ),
    ),
  };
}

export async function remove(username: string) {
  validateUsername(username);
  await requirePermission("the8020.users.user.delete", username);
  const result = await db.transaction().execute(async (transaction) => {
    await transaction.updateTable(Users.table)
      .set({ updatedAt: new Date() })
      .where(Users.username, "=", username).execute();
    await transaction.deleteFrom(Certificates.table)
      .where(Certificates.username, "=", username).execute();
    const removed = await transaction.deleteFrom(Users.table)
      .where(Users.username, "=", username)
      .executeTakeFirst();
    if (removed.numDeletedRows === 0n) {
      throw new AdminCommandError({
        code: "not_found",
        message: `user ${username} was not found`,
      });
    }
    await transaction.deleteFrom(Sessions.table)
      .where(Sessions.username, "=", username)
      .execute();
    return { removed: true };
  });
  try {
    await kernel.events.emit("users.deleted", { username });
  } catch (error) {
    throw new AdminCommandError({
      code: "runtime_operation",
      message:
        `User ${username} was deleted; event publication failed: ${error}`,
    });
  }
  return result;
}

async function update(
  username: string,
  revoke: boolean,
  mutate: (transaction: DatabaseTransaction) => Promise<bigint>,
) {
  validateUsername(username);
  return await db.transaction().execute(async (transaction) => {
    if (await mutate(transaction) === 0n) {
      throw new AdminCommandError({
        code: "not_found",
        message: `user ${username} was not found`,
      });
    }
    if (revoke) {
      await transaction.deleteFrom(Sessions.table)
        .where(Sessions.username, "=", username)
        .execute();
    }
    return { user: await readUser(username, transaction) };
  });
}

export async function updateDetails(
  username: string,
  details: z.infer<typeof userProfile>,
) {
  if (!context.authenticated || context.username !== username) {
    await requirePermission("the8020.users.user.edit", username);
  }
  const profile = userProfile.parse(details);
  return update(username, false, async (transaction) => {
    const result = await transaction.updateTable(Users.table)
      .set({ ...profile, updatedAt: new Date() })
      .where(Users.username, "=", username)
      .executeTakeFirst();
    return result.numUpdatedRows;
  });
}

export async function enable(username: string) {
  await requirePermission("the8020.users.user.edit", username);
  return update(username, false, async (transaction) => {
    const result = await transaction.updateTable(Users.table)
      .set({ enabled: true, updatedAt: new Date() })
      .where(Users.username, "=", username)
      .executeTakeFirst();
    return result.numUpdatedRows;
  });
}

export async function disable(username: string) {
  await requirePermission("the8020.users.user.edit", username);
  return update(username, true, async (transaction) => {
    const result = await transaction.updateTable(Users.table)
      .set({
        enabled: false,
        authVersion: sql<number>`${sql.ref(Users.authVersion)} + CASE WHEN ${
          sql.ref(Users.enabled)
        } THEN 1 ELSE 0 END`,
        updatedAt: new Date(),
      })
      .where(Users.username, "=", username)
      .executeTakeFirst();
    return result.numUpdatedRows;
  });
}

export async function setPassword(username: string, password: string) {
  if (
    !context.authenticated || context.username !== username || password === ""
  ) {
    await requirePermission("the8020.users.user.password", username);
  }
  const passwordHash = password === ""
    ? ""
    : await hashPassword(username, password);
  return await update(username, true, async (transaction) => {
    const result = await transaction.updateTable(Users.table)
      .set({
        passwordHash,
        authVersion: sql<number>`${sql.ref(Users.authVersion)} + 1`,
        updatedAt: new Date(),
      })
      .where(Users.username, "=", username)
      .executeTakeFirst();
    return result.numUpdatedRows;
  });
}

/** Explicit incompatible-credential transition; CBus remains usable without login. */
export async function resetPasswords(
  recoveryUsername: string,
  password: string,
) {
  validateUsername(recoveryUsername);
  await requirePermission("the8020.users.passwords.reset", "*");
  const passwordHash = await hashPassword(recoveryUsername, password);
  return await db.transaction().execute(async (transaction) => {
    const now = new Date();
    // Lock all affected accounts before deleting sessions, as ordinary mutations do.
    await transaction.updateTable(Users.table).set({
      passwordHash: "",
      authVersion: sql<number>`${sql.ref(Users.authVersion)} + 1`,
      updatedAt: now,
    }).execute();
    const recovery = await transaction.updateTable(Users.table)
      .set({ passwordHash, enabled: true })
      .where(Users.username, "=", recoveryUsername).executeTakeFirst();
    if (recovery.numUpdatedRows === 0n) {
      throw new AdminCommandError({
        code: "not_found",
        message: "Recovery account was not found",
      });
    }
    await transaction.deleteFrom(Sessions.table).execute();
    return { reset: true, recovery_user: recoveryUsername };
  });
}

export async function invalidateSessions(username: string) {
  if (!context.authenticated || context.username !== username) {
    await requirePermission("the8020.users.user.sessions", username);
  }
  return update(username, true, async (transaction) => {
    const result = await transaction.updateTable(Users.table)
      .set({
        authVersion: sql<number>`${sql.ref(Users.authVersion)} + 1`,
        updatedAt: new Date(),
      })
      .where(Users.username, "=", username)
      .executeTakeFirst();
    return result.numUpdatedRows;
  });
}

export async function listSessions(username?: string) {
  if (username !== undefined) await requireView(username);
  const [records, users] = await Promise.all([
    Sessions.select([
      Sessions.sessionId,
      Sessions.username,
      Sessions.type,
      Sessions.transport,
      Sessions.authVersion,
      Sessions.createdAt,
      Sessions.expiresAt,
    ]).$if(
      username !== undefined,
      (query) => query.where(Sessions.username, "=", username!),
    ).orderBy(Sessions.sessionId).execute(),
    Users.select([
      Users.username,
      Users.enabled,
      passwordSet,
      Users.authVersion,
    ]).$if(
      username !== undefined,
      (query) => query.where(Users.username, "=", username!),
    ).execute(),
  ]);
  const accounts = new Map(users.map((user) => [user.username, user]));
  const now = new Date();
  const visible = new Set(
    username !== undefined
      ? [username]
      : (await viewable(users.map((user) => ({ username: user.username }))))
        .map((user) => user.username),
  );
  return {
    authentication_sessions: records.filter((record) =>
      visible.has(record.username)
    ).map((record) => {
      const account = accounts.get(record.username);
      return {
        session_id: record.sessionId,
        type: record.type,
        transport: record.transport,
        username: record.username,
        created_at: record.createdAt.toISOString(),
        expires_at: record.expiresAt.toISOString(),
        auth_version: record.authVersion,
        valid: account?.enabled === true && account.passwordSet === 1 &&
          account.authVersion === record.authVersion && record.expiresAt > now,
      };
    }),
  };
}

export async function revokeSession(sessionId: string) {
  if (!/^[a-f0-9]{32}$/.test(sessionId)) {
    throw new AdminCommandError({
      code: "invalid_arguments",
      message: "session ID must be 32 lowercase hexadecimal characters",
    });
  }
  const session = await Sessions.select([Sessions.username]).where(
    Sessions.sessionId,
    "=",
    sessionId,
  ).executeTakeFirst();
  if (
    session && (!context.authenticated || context.username !== session.username)
  ) {
    await requirePermission("the8020.users.user.sessions", session.username);
  }
  await Sessions.delete().where(Sessions.sessionId, "=", sessionId).execute();
  return { revoked: true };
}

export async function revokeUserSessions(username: string) {
  validateUsername(username);
  if (!context.authenticated || context.username !== username) {
    await requirePermission("the8020.users.user.sessions", username);
  }
  const result = await Sessions.delete().where(
    Sessions.username,
    "=",
    username,
  ).executeTakeFirst();
  return { revoked_count: Number(result.numDeletedRows) };
}

export async function cleanupSessions() {
  const result = await Sessions.delete().where(
    Sessions.expiresAt,
    "<=",
    new Date(),
  ).executeTakeFirst();
  return { removed_count: Number(result.numDeletedRows) };
}
