import { assertEquals } from "@std/assert";
import { kernelDatabaseBackendSymbol } from "@the8020/kernel";

(globalThis as unknown as Record<symbol, unknown>)[
  kernelDatabaseBackendSymbol
] = "sqlite";
const { descriptorOf } = await import("/p/the8020/db/mod.ts");
const Sessions = (await import("./sessions.ts")).default;
const Users = (await import("./users.ts")).default;

Deno.test("users own authentication identities and opaque sessions", () => {
  assertEquals(Users.table, "the8020__users__users");
  assertEquals(Sessions.table, "the8020__users__sessions");
  assertEquals(
    descriptorOf(Users).columns.map((column) => column.name),
    [
      "username",
      "fullName",
      "passwordHash",
      "enabled",
      "authVersion",
      "createdAt",
      "updatedAt",
    ],
  );
  assertEquals(
    descriptorOf(Users).columns.find((column) => column.name === "passwordHash")
      ?.default,
    { kind: "literal", value: "" },
  );
});
