import { assertEquals, assertRejects } from "@std/assert";
import { authDatabase } from "/p/the8020/auth/src/test_support.ts";

Deno.test("account reads require view except for the user's own account", async () => {
  const fixture = await authDatabase();
  const users = await import("./admin.ts");
  const auth = await import("/p/the8020/auth/src/admin.ts");
  try {
    for (const name of ["alice", "bob", "carol"]) await users.add(name);
    await auth.createRole({
      name: "alice",
      description: "",
      permissions: { "the8020.users.user.view": "bob" },
    });
    fixture.asUser("alice");
    assertEquals(
      (await users.list()).users.map((row) => row.username).sort(),
      ["alice", "bob"],
    );
    assertEquals((await users.user("alice")).username, "alice");
    await users.user("bob");
    await assertRejects(() => users.user("carol"), Error, "Permission denied");
    assertEquals(
      (await users.listSessions()).authentication_sessions.every((row) =>
        ["alice", "bob"].includes(row.username)
      ),
      true,
    );
    await assertRejects(
      () => users.listSessions("carol"),
      Error,
      "Permission denied",
    );
    fixture.asUser("carol");
    assertEquals((await users.list()).users.map((row) => row.username), [
      "carol",
    ]);
    fixture.asUser("system");
    assertEquals((await users.list()).users.length, 3);
  } finally {
    fixture.close();
  }
});
