// Native callback integration fixture; run by the sibling kernel's Go test.
import { assert, assertEquals, assertRejects } from "@std/assert";
import { kernel, type KernelInvoke, kernelInvokeSymbol } from "@the8020/kernel";
import { context } from "@the8020/context";
import { hashPassword, verifyPassword } from "./password.ts";

const password = "synthetic-runtime-password";
const recovered = "synthetic-recovery-password";
let customHash = "";
let ticks = 0, maxDelay = 0, lastTick = 0;
let timer: ReturnType<typeof setInterval> | undefined;
function startClock() {
  ticks = 0;
  maxDelay = 0;
  lastTick = performance.now();
  timer = setInterval(() => {
    const now = performance.now();
    maxDelay = Math.max(maxDelay, now - lastTick - 1);
    lastTick = now;
    ticks++;
  }, 1);
}
function stopClock() {
  clearInterval(timer);
  return { ticks, max_timer_delay_ms: maxDelay };
}

// Independent credential store: no platform account lookup or login/session API.
export async function authenticate(
  _request: Request,
  input: { username: string },
) {
  return input.username === "external" && await verifyPassword(
      "external",
      customHash,
      kernel.execution.secret("password"),
    )
    ? { userId: "user:external", username: "external" }
    : new Response("Rejected", { status: 401 });
}

export default {
  fetch() {
    assertEquals(kernel.execution.optionalSecret("password"), undefined);
    return Response.json({ username: context.username });
  },
};

export const workerFunctions = {
  async setup(input: unknown) {
    const admin = await import("./admin.ts");
    const users = await import("./authentication.ts");
    if (input === "fresh") {
      await admin.setPassword("alice", password);
      await admin.setPassword("other", password);
      for (const candidate of ["unicode-🔐\0exact", "x".repeat(1_048_576)]) {
        const record = await hashPassword("alice", candidate);
        assert(await verifyPassword("alice", record, candidate));
      }
    } else {
      assertEquals(
        (await users.authenticatePassword("alice", recovered))?.username,
        "alice",
      );
      assertEquals(
        await users.authenticatePassword("other", password),
        undefined,
      );
    }
    const current = input === "fresh" ? password : recovered;
    assertEquals(
      (await users.authenticatePassword("alice", current))?.username,
      "alice",
    );
    assertEquals(await users.authenticatePassword("alice", "wrong"), undefined);
    assertEquals(
      await users.authenticatePassword("unknown", current),
      undefined,
    );
    assertEquals(await users.authenticatePassword("Alice", current), undefined);
    return true;
  },
  async measure() {
    const hash = await hashPassword("alice", password);
    const times: number[] = [];
    const hashTimes: number[] = [];
    startClock();
    try {
      for (let i = 0; i < 30; i++) {
        const start = performance.now();
        await hashPassword("alice", password);
        hashTimes.push(performance.now() - start);
      }
      hashTimes.sort((a, b) => a - b);
      for (let i = 0; i < 50; i++) {
        const start = performance.now();
        assert(await verifyPassword("alice", hash, password));
        times.push(performance.now() - start);
      }
      const start = performance.now();
      for (let i = 0; i < 8; i++) {
        const results = await Promise.all(
          Array.from(
            { length: 8 },
            () => verifyPassword("alice", hash, password),
          ),
        );
        assert(results.every(Boolean));
      }
      times.sort((a, b) => a - b);
      return {
        hash_median_ms: hashTimes[15],
        helper_median_ms: times[25],
        helper_p95_ms: times[47],
        concurrent_64_ms: performance.now() - start,
        ...stopClock(),
      };
    } finally {
      stopClock();
    }
  },
  async reset(input: unknown) {
    const admin = await import("./admin.ts");
    const users = await import("./authentication.ts");
    const login = await users.login(new Request("https://fixture/login"), {
      username: "alice",
      password: input === "restart" ? recovered : password,
    });
    assert(login.token);
    const claims = await kernel.crypto.token.verify(login.token);
    assert(claims);
    await assertRejects(() => admin.resetPasswords("absent", recovered));
    await admin.resetPasswords("alice", recovered);
    assertEquals(await users.validateSession(claims), undefined);
    assertEquals(
      (await users.authenticatePassword("alice", recovered))?.username,
      "alice",
    );
    assertEquals(
      await users.authenticatePassword("other", password),
      undefined,
    );
    const result = await kernel.database.execute(
      "SELECT value FROM custom_store",
      [],
      { returnRows: true },
    );
    assertEquals(result.rows, [["preserve"]]);
    return true;
  },
  async custom(input: unknown) {
    customHash = typeof input === "string"
      ? input
      : await hashPassword("external", password);
    return customHash;
  },
  async namespace() {
    const invoke = (globalThis as unknown as Record<symbol, KernelInvoke>)[
      kernelInvokeSymbol
    ]!;
    const bytes = new TextEncoder().encode(password);
    const nonce = new Uint8Array(16);
    const input = {
      user_id: "external",
      password: bytes.toBase64(),
      nonce: nonce.toBase64(),
    };
    try {
      const own = await kernel.crypto.passwordDigest("external", bytes, nonce);
      const forged = await invoke("runtime.operation", {
        operation: "crypto.password.digest",
        input,
        credential_namespace: "package:the8020/users",
      }) as { result: { digest: string } };
      assertEquals(Object.keys(forged.result), ["digest"]);
      assertEquals(Uint8Array.fromBase64(forged.result.digest), own);
      await assertRejects(() =>
        invoke("runtime.operation", {
          operation: "crypto.password.digest",
          input: { ...input, namespace: "package:the8020/users" },
        }).then((result) => {
          if (!(result as { success: boolean }).success) {
            throw new Error("forbidden");
          }
        })
      );
      return true;
    } finally {
      bytes.fill(0);
    }
  },
  clock(input: unknown) {
    if (input === "start") {
      startClock();
      return true;
    }
    return stopClock();
  },
};

if (import.meta.main) {
  const { Supervisor } = await import(
    "../../kernel/defaults/config/runtime/deno/supervisor/supervisor.ts"
  );
  const { kernelCallbackRequest } = await import(
    "../../kernel/defaults/config/runtime/deno/supervisor/callback_request.ts"
  );
  const { postUnixHTTP } = await import(
    "../../kernel/defaults/config/runtime/deno/supervisor/unix_http.ts"
  );
  const { newId } = await import("@the8020/kernel");
  const { PROTOCOL_VERSION } = await import(
    "@the8020/protocol"
  );
  const [socket, token, phase] = Deno.args as [string, string, string];
  const sandboxId = "sbx-aaaaaaaaaa";
  const user = { userId: "user:system", username: "system" };
  let digestCalls = 0;
  const supervisor = new Supervisor({
    nodeId: "nod-aaaaaaaaaa",
    sandboxId,
    workloadType: "service",
    token,
    supervisorVersion: "fixture",
    kernelCall: async (call, signal) => {
      if (
        call.operation === "runtime.operation" &&
        call.arguments.operation === "crypto.password.digest"
      ) digestCalls++;
      const request = kernelCallbackRequest(call);
      const correlation = newId("cor");
      const response = await postUnixHTTP(socket, request.path, token, {
        protocol_version: PROTOCOL_VERSION,
        message_type: request.messageType,
        sandbox_id: sandboxId,
        correlation_id: correlation,
        payload: request.payload,
      }, signal);
      assert(response.ok, `native callback status ${response.status}`);
      const result = await response.json();
      assertEquals(result.protocol_version, PROTOCOL_VERSION);
      assertEquals(result.message_type, request.responseMessageType);
      assertEquals(result.sandbox_id, sandboxId);
      assertEquals(result.correlation_id, correlation);
      return result.payload;
    },
  });
  const workers: Awaited<ReturnType<typeof supervisor.startWorker>>[] = [];
  const startWorker = async (id: string, namespace?: string) => {
    const worker = await supervisor.startWorker({
      metadata: {
        nodeId: "nod-aaaaaaaaaa",
        sandboxId,
        workerId: newId("wrk"),
        workloadType: "service",
        ownerId: id,
        workloadId: id,
        releaseId: "test",
        entrypoint: import.meta.url,
        debuggerName: id,
        databaseBackend: "sqlite",
        user,
        origin: { type: "service", id },
        service: {
          serviceId: id,
          generation: 1,
          canonicalBasePath: "/",
          credentialNamespace: namespace,
        },
      },
      permissions: { read: [new URL("../../", import.meta.url).pathname] },
    });
    workers.push(worker);
    supervisor.configureService(id, [worker.metadata.workerId], 8);
    return worker;
  };
  const invoke = async (
    worker: typeof workers[number],
    name: string,
    input: unknown = null,
  ) => {
    const result = await worker.invoke(
      name,
      input,
      AbortSignal.timeout(10000),
      undefined,
      user,
      { contextId: newId("ctx") },
    );
    assert(result.ok, result.error?.message);
    return result.output;
  };
  const request = async (
    id: string,
    username: string,
    credential: string,
    module: string,
  ) => {
    const response = await supervisor.handler(
      new Request(
        `http://fixture/v1/services/${encodeURIComponent(id)}/dispatch`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "the8020-internal-context-id": newId("ctx"),
            "the8020-internal-authentication": btoa(JSON.stringify({
              module,
              input: { method: "password", username },
              secrets: { password: credential },
              unauthenticated: { action: "reject", status: 401 },
            })),
          },
        },
      ),
    );
    await response.body?.cancel();
    return response.status;
  };
  try {
    const platform = await startWorker(
      "fixture/platform/login",
      "package:the8020/users",
    );
    await invoke(platform, "setup", phase);
    if (phase === "fresh") {
      digestCalls = 0;
      const helper = await invoke(platform, "measure");
      assertEquals(digestCalls, 145);
      digestCalls = 0;
      const module = new URL("../mod.ts", import.meta.url).href;
      const times: number[] = [];
      await invoke(platform, "clock", "start");
      for (let i = 0; i < 50; i++) {
        const start = performance.now();
        assertEquals(
          await request(
            platform.metadata.workloadId,
            "alice",
            password,
            module,
          ),
          200,
        );
        times.push(performance.now() - start);
      }
      const start = performance.now();
      for (let i = 0; i < 8; i++) {
        assert(
          (await Promise.all(
            Array.from(
              { length: 8 },
              () =>
                request(
                  platform.metadata.workloadId,
                  "alice",
                  password,
                  module,
                ),
            ),
          ))
            .every((status) => status === 200),
        );
      }
      const concurrent = performance.now() - start;
      assertEquals(digestCalls, 114);
      times.sort((a, b) => a - b);
      const clock = await invoke(platform, "clock", "stop");
      console.log(
        JSON.stringify({
          helper,
          basic_target: {
            median_ms: times[25],
            p95_ms: times[47],
            concurrent_64_ms: concurrent,
            clock,
          },
        }),
      );
      const custom = await startWorker("fixture/custom/login");
      const other = await startWorker("fixture/other/login");
      const record = await invoke(custom, "custom");
      await invoke(other, "custom", record);
      await invoke(custom, "namespace");
      assertEquals(
        await request(
          custom.metadata.workloadId,
          "external",
          password,
          import.meta.url,
        ),
        200,
      );
      assertEquals(
        await request(
          other.metadata.workloadId,
          "external",
          password,
          import.meta.url,
        ),
        401,
      );
      assertEquals(
        await request(
          custom.metadata.workloadId,
          "external",
          "wrong",
          import.meta.url,
        ),
        401,
      );
    }
    await invoke(platform, "reset", phase);
    console.log(JSON.stringify({ phase, verified: true }));
  } finally {
    for (const worker of workers) worker.kill();
    await supervisor.drain();
  }
}
