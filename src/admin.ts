import { db, type Selectable, sql } from "/p/the8020/db/mod.ts";
import type { Database } from "/p/the8020/db/types.ts";
import { AdminCommandError } from "@the8020/kernel";
import { hashPassword } from "./password.ts";
import type { Kysely, Transaction } from "kysely";
import Sessions from "../tables/sessions.ts";
import Users, { type UserRow } from "../tables/users.ts";
import { userProfile } from "../types/user.ts";
import type { z } from "/p/the8020/db/fields.ts";

type User = Selectable<UserRow>;
type PublicUser = Omit<User, "passwordHash"> & { passwordSet: number };
type Queryable = Pick<Kysely<Database>, "selectFrom">;
type DatabaseTransaction = Transaction<Database>;
// Return only a non-secret integer flag; CASE has the same result on both engines.
const passwordSet = sql<number>`CASE WHEN ${
  sql.ref(Users.passwordHash)
} = '' THEN 0 ELSE 1 END`.as("passwordSet");

function validateUsername(username: string): void {
  if (!/^[a-z0-9]{3,32}$/.test(username)) {
    throw new AdminCommandError({
      code: "invalid_arguments",
      message: "username must contain 3-32 lowercase letters or digits",
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

export async function user(username: string, database: Queryable = db) {
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
  const profile = userProfile.parse({ fullName });
  const passwordHash = password === "" ? "" : await hashPassword(password);
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
  return { user: await user(username) };
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
    users: records.map((record) =>
      summarize(record, counts.get(record.username) ?? 0)
    ),
  };
}

export async function remove(username: string) {
  validateUsername(username);
  return await db.transaction().execute(async (transaction) => {
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
    return { user: await user(username, transaction) };
  });
}

export function updateDetails(
  username: string,
  details: z.infer<typeof userProfile>,
) {
  const profile = userProfile.parse(details);
  return update(username, false, async (transaction) => {
    const result = await transaction.updateTable(Users.table)
      .set({ ...profile, updatedAt: new Date() })
      .where(Users.username, "=", username)
      .executeTakeFirst();
    return result.numUpdatedRows;
  });
}

export function enable(username: string) {
  return update(username, false, async (transaction) => {
    const result = await transaction.updateTable(Users.table)
      .set({ enabled: true, updatedAt: new Date() })
      .where(Users.username, "=", username)
      .executeTakeFirst();
    return result.numUpdatedRows;
  });
}

export function disable(username: string) {
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
  const passwordHash = password === "" ? "" : await hashPassword(password);
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

export function invalidateSessions(username: string) {
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
  const [records, users] = await Promise.all([
    Sessions.select([
      Sessions.sessionId,
      Sessions.username,
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
  return {
    authentication_sessions: records.map((record) => {
      const account = accounts.get(record.username);
      return {
        session_id: record.sessionId,
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
  await Sessions.delete().where(Sessions.sessionId, "=", sessionId).execute();
  return { revoked: true };
}

export async function revokeUserSessions(username: string) {
  validateUsername(username);
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
