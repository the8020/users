import { assert, assertEquals, assertRejects, assertThrows } from "@std/assert";
import { X509Certificate } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import {
  kernelDatabaseBackendSymbol,
  kernelInvokeSymbol,
  type TokenClaims,
} from "@the8020/kernel";
import { hashPassword, verifyPassword } from "./password.ts";
import { fieldMetadata } from "/p/the8020/db/fields.ts";
import { username } from "../types/user.ts";
import { installContextProvider } from "../../kernel/defaults/config/runtime/deno/context/runtime.ts";
import type { ExecutionContext } from "@the8020/context";

const globals = globalThis as unknown as Record<symbol, unknown>;
globals[kernelDatabaseBackendSymbol] = "sqlite";
const users = await import("../mod.ts");
const admin = await import("./admin.ts");
const certificates = await import("./certificates.ts");
import {
  caCertificate,
  clientCertificate,
  expiredCertificate,
  futureCertificate,
  serverCertificate,
} from "./certificate_fixtures.ts";

Deno.test("certificate enrollment accepts one valid client X.509 certificate in PEM or DER", () => {
  const parsed = certificates.inspectCertificate(clientCertificate);
  assertEquals(
    certificates.inspectCertificate(
      new TextEncoder().encode(clientCertificate),
    ),
    parsed,
  );
  assertEquals(
    parsed,
    certificates.inspectCertificate(new X509Certificate(clientCertificate).raw),
  );
  assert(/^[a-f0-9]{64}$/.test(parsed.fingerprint));
  for (
    const invalid of [
      "",
      "invalid",
      clientCertificate + clientCertificate,
      clientCertificate + "-----BEGIN PRIVATE KEY-----",
      serverCertificate,
      expiredCertificate,
      futureCertificate,
      caCertificate,
      "a".repeat(65537),
    ]
  ) {
    assertThrows(() => certificates.inspectCertificate(invalid));
    assertThrows(() =>
      certificates.inspectCertificate(new TextEncoder().encode(invalid))
    );
  }
  const der = new X509Certificate(clientCertificate).raw;
  assertThrows(() =>
    certificates.inspectCertificate(new Uint8Array([...der, 0]))
  );
});

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
  let testUsername = "system";
  const restoreContext = installContextProvider(
    () => ({ username: testUsername, authenticated: true } as ExecutionContext),
  );
  database.exec(`CREATE TABLE the8020__users__users (
    username TEXT PRIMARY KEY, passwordHash TEXT NOT NULL, enabled INTEGER NOT NULL,
    authVersion INTEGER NOT NULL, createdAt TEXT NOT NULL, updatedAt TEXT NOT NULL,
    fullName TEXT NOT NULL DEFAULT '');
    CREATE TABLE the8020__system__settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, definitionHash TEXT NOT NULL, updatedAt TEXT NOT NULL);
    INSERT INTO the8020__system__settings VALUES ('system.profile', '{"id":"sys-aaaaaaaaaa","name":"Development","role":"development"}', 'the8020/system', '2026-01-01T00:00:00Z');
    CREATE TABLE the8020__users__sessions (sessionId TEXT PRIMARY KEY, username TEXT NOT NULL,
    authVersion INTEGER NOT NULL, createdAt TEXT NOT NULL, expiresAt TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'username', transport TEXT NOT NULL DEFAULT 'remote');
    CREATE TABLE the8020__users__certificates (
      fingerprint TEXT PRIMARY KEY, username TEXT NOT NULL REFERENCES the8020__users__users(username),
      label TEXT NOT NULL, subject TEXT NOT NULL, issuer TEXT NOT NULL,
      validFrom TEXT NOT NULL, expiresAt TEXT NOT NULL, createdAt TEXT NOT NULL);
    CREATE INDEX certificate_user ON the8020__users__certificates(username);`);
  const tokens = new Map<string, TokenClaims>();
  const deletedUsers: unknown[] = [];
  const createdUsers: unknown[] = [];
  let databaseCalls = 0;
  globals[kernelInvokeSymbol] = (
    operation: string,
    input: Record<string, unknown>,
  ) => {
    if (operation === "runtime.operation") {
      const data = input.input as Record<string, unknown>;
      if (input.operation === "event.emit" && data.name === "users.created") {
        createdUsers.push(data.data);
        return Promise.resolve({
          success: true,
          result: { id: "event", listeners: 1 },
        });
      }
      if (input.operation === "event.emit") {
        assertEquals(data.name, "users.deleted");
        assertEquals(
          database.prepare(
            "SELECT username FROM the8020__users__users WHERE username = ?",
          )
            .all("alice"),
          [],
        );
        assertEquals(
          database.prepare(
            "SELECT username FROM the8020__users__sessions WHERE username = ?",
          )
            .all("alice"),
          [],
        );
        deletedUsers.push(data.data);
        assertEquals(
          database.prepare(
            "SELECT fingerprint FROM the8020__users__certificates WHERE username = ?",
          ).all("alice"),
          [],
        );
        return Promise.resolve({
          success: true,
          result: { id: "event", listeners: 0 },
        });
      }
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
    headers: { cookie: "the8020_auth_sys-aaaaaaaaaa=stale" },
  });
  try {
    await admin.add("alice", "correct horse", " Alice Example ");
    await admin.add("passwordless");
    const lookup = fieldMetadata(username)!.valueHelp!;
    const beforeLookup = databaseCalls;
    const query = { search: "", filters: {}, sort: null };
    const first = await lookup({ query, offset: 0, limit: 1 });
    assertEquals(first.rows, [{
      username: "alice",
      fullName: "Alice Example",
      enabled: true,
    }]);
    assertEquals([first.more, first.totalItems], [true, 2]);
    assertEquals(databaseCalls - beforeLookup, 2);
    const last = await lookup({ query, offset: 1, limit: 1 });
    assertEquals(last.rows, [{
      username: "passwordless",
      fullName: "",
      enabled: true,
    }]);
    assertEquals([last.more, last.totalItems], [false, 2]);
    const found = await lookup({
      query: { ...query, search: " EXAMPLE " },
      offset: 0,
      limit: 20,
    });
    assertEquals(found.rows, first.rows);
    assertEquals([found.more, found.totalItems], [false, 1]);
    assertEquals(await users.eligibleUser("passwordless"), undefined);
    testUsername = "passwordless";
    const enrolled = await certificates.addCertificate(
      "passwordless",
      "Service caller",
      clientCertificate,
    );
    assertEquals(
      (await certificates.listCertificates("passwordless"))[0]?.label,
      "Service caller",
    );
    const beforeCertificateLookup = databaseCalls;
    assertEquals(
      (await users.authenticateCertificate(enrolled.fingerprint))?.username,
      "passwordless",
    );
    assertEquals(databaseCalls - beforeCertificateLookup, 1);
    assertEquals(
      await users.authenticateCertificate("malformed"),
      undefined,
    );
    assertEquals(databaseCalls - beforeCertificateLookup, 1);
    await assertRejects(() =>
      certificates.addCertificate(
        "passwordless",
        "Duplicate",
        clientCertificate,
      )
    );
    await assertRejects(() =>
      certificates.addCertificate("alice", "Not my account", clientCertificate)
    );
    testUsername = "system";
    await assertRejects(() =>
      certificates.addCertificate("alice", "Already owned", clientCertificate)
    );
    await admin.disable("passwordless");
    assertEquals(
      await users.authenticateCertificate(enrolled.fingerprint),
      undefined,
    );
    await admin.enable("passwordless");
    assertEquals(
      (await users.authenticateCertificate(enrolled.fingerprint))?.username,
      "passwordless",
    );
    database.prepare(
      "UPDATE the8020__users__certificates SET expiresAt = ? WHERE fingerprint = ?",
    ).run("2000-01-01T00:00:00.000Z", enrolled.fingerprint);
    assertEquals(
      await users.authenticateCertificate(enrolled.fingerprint),
      undefined,
    );
    await certificates.removeCertificate("alice", enrolled.fingerprint);
    assertEquals(
      (await certificates.listCertificates("passwordless")).length,
      1,
    );
    await certificates.removeCertificate("passwordless", enrolled.fingerprint);
    assertEquals(
      await users.authenticateCertificate(enrolled.fingerprint),
      undefined,
    );
    await certificates.addCertificate(
      "alice",
      "Service caller",
      clientCertificate,
    );
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
    assert(result.setCookie.startsWith("the8020_auth_sys-aaaaaaaaaa="));
    assertEquals(
      await users.requestToken(
        new Request(request.url, {
          headers: {
            cookie:
              `the8020_auth_sys-bbbbbbbbbb=other; the8020_auth_sys-aaaaaaaaaa=${result.token}`,
          },
        }),
      ),
      result.token,
    );
    const foreign = new Request(request.url, {
      headers: { cookie: "the8020_auth_sys-bbbbbbbbbb=other" },
    });
    assertEquals(await users.requestToken(foreign), "");
    assert(
      (await users.clearCookie(foreign)).startsWith(
        "the8020_auth_sys-aaaaaaaaaa=;",
      ),
    );
    const claims = tokens.get(result.token)!;
    const beforeInvalidClaims = databaseCalls;
    for (
      const sid of [undefined, null, "", "x".repeat(129), 12, { new: "format" }]
    ) {
      assertEquals(await users.validateSession({ ...claims, sid }), undefined);
    }
    for (
      const ver of [
        undefined,
        null,
        "1",
        0,
        -1,
        1.5,
        Number.MAX_SAFE_INTEGER + 1,
      ]
    ) {
      assertEquals(await users.validateSession({ ...claims, ver }), undefined);
    }
    assertEquals(databaseCalls, beforeInvalidClaims);
    const account = await admin.user("alice");
    assertEquals(account.full_name, "Alice Example");
    assertEquals(account.active_authentication_session_count, 1);
    assertEquals(Object.hasOwn(account, "passwordHash"), false);
    const updated = await admin.updateDetails("alice", {
      fullName: " Alice Updated ",
    });
    assertEquals(updated.user.full_name, "Alice Updated");
    assertEquals(updated.user.auth_version, account.auth_version);
    assertEquals(updated.user.active_authentication_session_count, 1);
    assertEquals((await users.validateSession(claims))?.username, "alice");
    assertEquals(
      (await admin.list()).users.find((user) => user.username === "alice")
        ?.full_name,
      "Alice Updated",
    );
    await assertRejects(() =>
      admin.updateDetails("alice", { fullName: "x".repeat(201) })
    );
    await assertRejects(() =>
      admin.updateDetails("missing", { fullName: "Missing" })
    );
    assertEquals((await admin.user("alice")).full_name, "Alice Updated");
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

    testUsername = "alice";
    try {
      const allowance = await users.issueAllowance();
      const tokenClaims = tokens.get(allowance.token)!;
      assertEquals(tokenClaims.transport, "local");
      assertEquals(
        (await users.validateSession(tokenClaims))?.username,
        "alice",
      );
      assertEquals(
        await users.validateSession({ ...tokenClaims, transport: "remote" }),
        undefined,
      );
      const signIn = (await admin.listSessions("alice")).authentication_sessions
        .find((session) => session.session_id === tokenClaims.sid)!;
      assertEquals([signIn.type, signIn.transport, signIn.valid], [
        "token",
        "local",
        true,
      ]);
      await admin.revokeSession(String(tokenClaims.sid));
      assertEquals(await users.validateSession(tokenClaims), undefined);
    } finally {
      testUsername = "system";
    }

    const second = await users.login(request, {
      username: "alice",
      password: "correct horse",
    });
    const secondClaims = tokens.get(second.token!)!;
    await admin.disable("alice");
    const disabled = await lookup({
      query: { ...query, search: "alice" },
      offset: 0,
      limit: 20,
    });
    assertEquals(disabled.rows, [{
      username: "alice",
      fullName: "Alice Updated",
      enabled: false,
    }]);
    assertEquals([disabled.more, disabled.totalItems], [false, 1]);
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

    const beforeReset = await users.login(request, {
      username: "alice",
      password: "correct horse",
    });
    await admin.setPassword("alice", "updated password");
    assertEquals(
      await users.validateSession(tokens.get(beforeReset.token!)!),
      undefined,
    );
    assertEquals(
      await users.authenticatePassword("alice", "correct horse"),
      undefined,
    );
    assertEquals(
      (await users.authenticatePassword("alice", "updated password"))?.username,
      "alice",
    );

    const third = await users.login(request, {
      username: "alice",
      password: "updated password",
    });
    const validRequest = new Request(request.url, {
      headers: { cookie: `the8020_auth_sys-aaaaaaaaaa=${third.token}` },
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
          headers: { cookie: `the8020_auth_sys-aaaaaaaaaa=${token}` },
        }),
      );
      assertEquals(response.status, 204);
      assertEquals(databaseCalls, before + 2);
      assert(response.headers.get("set-cookie")!.includes("Max-Age=0"));
      assert(
        response.headers.get("set-cookie")!.includes(
          "Path=/; HttpOnly; SameSite=Lax",
        ),
      );
    }
    // No auth tables exist in this fixture: deletion must remain users-owned.
    await users.login(request, {
      username: "alice",
      password: "updated password",
    });
    assertEquals(
      (await admin.listSessions("alice")).authentication_sessions.length,
      1,
    );
    await admin.remove("alice");
    assertEquals(
      await users.authenticateCertificate(enrolled.fingerprint),
      undefined,
    );
    assertEquals(deletedUsers, [{ username: "alice" }]);
    // Every account creation was announced for listeners such as auth.
    assert(
      createdUsers.some((item) =>
        (item as { username: string }).username === "alice"
      ),
    );
    await assertRejects(() => admin.remove("alice"));
    assertEquals(deletedUsers.length, 1);
    database.exec("DROP TABLE the8020__users__sessions");
    const failedLogout = await users.logout(validRequest);
    assertEquals(failedLogout.status, 503);
    assert(failedLogout.headers.get("set-cookie")!.includes("Max-Age=0"));
    const explicit = new Request(request.url, {
      headers: {
        "the8020-authorization": "bad",
        cookie: `the8020_auth_sys-aaaaaaaaaa=${third.token}`,
      },
    });
    assertEquals(await users.requestToken(explicit), "");
    assertEquals(
      await users.requestToken(
        new Request(request.url, {
          headers: {
            "the8020-authorization": "Bearer header",
            cookie: "the8020_auth_sys-aaaaaaaaaa=cookie",
          },
        }),
      ),
      "header",
    );
  } finally {
    restoreContext();
    delete globals[kernelInvokeSymbol];
    database.close();
  }
});
