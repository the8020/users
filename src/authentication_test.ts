import { assert, assertEquals, assertRejects } from "@std/assert";
import { DatabaseSync } from "node:sqlite";
import {
  kernelDatabaseBackendSymbol,
  kernelInvokeSymbol,
  type TokenClaims,
} from "@the8020/kernel";
import { hashPassword, verifyPassword } from "./password.ts";
import { fieldMetadata } from "/p/the8020/db/fields.ts";
import { username } from "../types/user.ts";

const globals = globalThis as unknown as Record<symbol, unknown>;
globals[kernelDatabaseBackendSymbol] = "sqlite";
const users = await import("../mod.ts");
const admin = await import("./admin.ts");

Deno.test("password hashing remains Argon2id with independent salts", async () => {
  // Fixed PHC produced by the former Go argon2.IDKey implementation.
  const legacy =
    "$argon2id$v=19$m=65536,t=3,p=1$b2xkLWdvLXNhbHQtdmFsdWU$FwDFbn9RYQgC2JKPKD8Cw/NFXG9yWvYmaWifpGaXRvo";
  assert(await verifyPassword(legacy, "legacy-password"));
  const hash = await hashPassword("correct horse");
  assert(hash.startsWith("$argon2id$v=19$m=65536,t=3,p=1$"));
  assert(await verifyPassword(hash, "correct horse"));
  assertEquals(await verifyPassword(hash, "wrong"), false);
  assertEquals(await verifyPassword(undefined, "wrong"), false);
  assertEquals(await verifyPassword("malformed", "wrong"), false);
  await assertRejects(() => hashPassword(""), TypeError);
  assert(hash !== await hashPassword("correct horse"));
});

Deno.test("users own login, session eligibility, revocation, and stale-cookie logout", async () => {
  const database = new DatabaseSync(":memory:");
  database.exec(`CREATE TABLE the8020__users__users (
    username TEXT PRIMARY KEY, passwordHash TEXT NOT NULL, enabled INTEGER NOT NULL,
    authVersion INTEGER NOT NULL, createdAt TEXT NOT NULL, updatedAt TEXT NOT NULL);
    CREATE TABLE the8020__users__sessions (sessionId TEXT PRIMARY KEY, username TEXT NOT NULL,
    authVersion INTEGER NOT NULL, createdAt TEXT NOT NULL, expiresAt TEXT NOT NULL);`);
  const tokens = new Map<string, TokenClaims>();
  let databaseCalls = 0;
  globals[kernelInvokeSymbol] = (
    operation: string,
    input: Record<string, unknown>,
  ) => {
    if (operation === "runtime.operation") {
      const data = input.input as Record<string, unknown>;
      if (input.operation === "crypto.token.sign") {
        const token = `test-token-${tokens.size}`;
        tokens.set(token, structuredClone(data.claims as TokenClaims));
        return Promise.resolve({ success: true, result: { token } });
      }
      const claims = tokens.get(String(data.token));
      return Promise.resolve({
        success: true,
        result: claims !== undefined && Number(claims.exp) > Date.now() / 1000
          ? claims
          : null,
      });
    }
    if (operation.startsWith("database.transaction.")) {
      const action = operation.split(".").at(-1)!;
      database.exec(action === "begin" ? "BEGIN" : action.toUpperCase());
      return Promise.resolve({ transaction: "transaction" });
    }
    if (operation !== "database.execute") {
      throw new Error(`unexpected operation ${operation}`);
    }
    databaseCalls++;
    const parameters = (input.parameters as unknown[]).map((value) => {
      if (value !== null && typeof value === "object") {
        const tagged = value as { type: string; value: string | boolean };
        return tagged.type === "boolean" ? Number(tagged.value) : tagged.value;
      }
      return typeof value === "boolean" ? Number(value) : value;
    }) as Array<string | number | null>;
    const statement = database.prepare(String(input.statement));
    if (input.return_rows) {
      const rows = statement.all(...parameters);
      const columns = Object.keys(rows[0] ?? {});
      return Promise.resolve({
        columns,
        rows: rows.map((row) => columns.map((column) => row[column])),
      });
    }
    const result = statement.run(...parameters);
    return Promise.resolve({
      columns: [],
      rows: [],
      affected_rows: { type: "bigint", value: String(result.changes) },
      insert_id: { type: "bigint", value: String(result.lastInsertRowid) },
    });
  };
  const request = new Request("https://example.test/login", {
    headers: { cookie: "the8020_auth=stale" },
  });
  try {
    await admin.add("alice", "correct horse");
    await admin.add("passwordless");
    const lookup = fieldMetadata(username)!.valueHelp!;
    const beforeLookup = databaseCalls;
    assertEquals(await lookup({ query: "", offset: 0, limit: 1 }), {
      items: [{ value: "alice", label: "alice", description: undefined }],
      more: true,
    });
    assertEquals(databaseCalls - beforeLookup, 1);
    assertEquals(await lookup({ query: "", offset: 1, limit: 1 }), {
      items: [{
        value: "passwordless",
        label: "passwordless",
        description: undefined,
      }],
      more: false,
    });
    assertEquals(await lookup({ query: " ALI ", offset: 0, limit: 20 }), {
      items: [{ value: "alice", label: "alice", description: undefined }],
      more: false,
    });
    assertEquals(await users.eligibleUser("passwordless"), undefined);
    assertEquals(await users.authenticatePassword("alice", "wrong"), undefined);
    const result = await users.login(request, {
      username: "alice",
      password: "correct horse",
    });
    assert(
      result.authenticated && result.token !== undefined &&
        result.setCookie !== undefined,
    );
    assert(result.setCookie.includes("Path=/; HttpOnly; SameSite=Lax"));
    assert(result.setCookie.includes("; Secure"));
    const claims = tokens.get(result.token)!;
    const account = await admin.user("alice");
    assertEquals(account.active_authentication_session_count, 1);
    assertEquals(Object.hasOwn(account, "passwordHash"), false);
    const beforeSessionLookup = databaseCalls;
    assertEquals(
      (await admin.listSessions("alice")).authentication_sessions.length,
      1,
    );
    assertEquals(databaseCalls - beforeSessionLookup, 2);
    assertEquals(
      (await admin.listSessions("passwordless")).authentication_sessions,
      [],
    );
    assertEquals(claims.sub, "user:alice");
    assertEquals(claims.iss, "the8020");
    assertEquals(claims.aud, "the8020");
    assertEquals(Number(claims.exp) - Number(claims.iat), 12 * 60 * 60);
    assertEquals((await users.validateSession(claims))?.username, "alice");
    await admin.revokeSession(String(claims.sid));
    assertEquals(await users.validateSession(claims), undefined);

    const second = await users.login(request, {
      username: "alice",
      password: "correct horse",
    });
    const secondClaims = tokens.get(second.token!)!;
    await admin.disable("alice");
    assertEquals(await lookup({ query: "alice", offset: 0, limit: 20 }), {
      items: [{
        value: "alice",
        label: "alice",
        description: "Disabled account",
      }],
      more: false,
    });
    assertEquals(await users.validateSession(secondClaims), undefined);
    assertEquals(await users.eligibleUser("alice"), undefined);
    assertEquals(
      (await users.authenticate(request, secondClaims, {
        action: "redirect",
        status: 303,
        redirect_url: "/login",
      }))?.headers.get("location"),
      "/login",
    );
    await admin.enable("alice");
    assertEquals(await users.validateSession(secondClaims), undefined);

    const third = await users.login(request, {
      username: "alice",
      password: "correct horse",
    });
    const validRequest = new Request(request.url, {
      headers: { cookie: `the8020_auth=${third.token}` },
    });
    const logout = await users.logout(validRequest);
    assertEquals(logout.status, 204);
    assertEquals(
      await users.validateSession(tokens.get(third.token!)!),
      undefined,
    );
    for (const token of ["", "invalid", "expired"]) {
      tokens.set("expired", { ...claims, exp: 1 });
      const before = databaseCalls;
      const response = await users.logout(
        new Request(request.url, {
          headers: { cookie: `the8020_auth=${token}` },
        }),
      );
      assertEquals(response.status, 204);
      assertEquals(databaseCalls, before);
      assert(response.headers.get("set-cookie")!.includes("Max-Age=0"));
      assert(
        response.headers.get("set-cookie")!.includes(
          "Path=/; HttpOnly; SameSite=Lax",
        ),
      );
    }
    database.exec("DROP TABLE the8020__users__sessions");
    const failedLogout = await users.logout(validRequest);
    assertEquals(failedLogout.status, 503);
    assert(failedLogout.headers.get("set-cookie")!.includes("Max-Age=0"));
    const explicit = new Request(request.url, {
      headers: {
        "the8020-authorization": "bad",
        cookie: `the8020_auth=${third.token}`,
      },
    });
    assertEquals(users.requestToken(explicit), "");
    assertEquals(
      users.requestToken(
        new Request(request.url, {
          headers: {
            "the8020-authorization": "Bearer header",
            cookie: "the8020_auth=cookie",
          },
        }),
      ),
      "header",
    );
  } finally {
    delete globals[kernelInvokeSymbol];
    database.close();
  }
});
