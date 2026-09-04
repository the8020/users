import { assertEquals } from "@std/assert";
import { kernelDatabaseBackendSymbol } from "@the8020/kernel";

(globalThis as unknown as Record<symbol, unknown>)[
  kernelDatabaseBackendSymbol
] = "sqlite";
const { descriptorOf } = await import("@the8020/db");
const Sessions = (await import("./sessions.ts")).default;
const Users = (await import("./users.ts")).default;

Deno.test("users own authentication identities and opaque sessions", () => {
  assertEquals(Users.table, "the8020__users__users");
  assertEquals(Sessions.table, "the8020__users__sessions");
  assertEquals(
    descriptorOf(Users).columns.map((column) => column.name),
    [
      "username",
      "passwordHash",
      "enabled",
      "authVersion",
      "createdAt",
      "updatedAt",
    ],
  );
});
