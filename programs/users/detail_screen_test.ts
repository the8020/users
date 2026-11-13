import { assertEquals } from "@std/assert";
import { authDatabase } from "/p/the8020/auth/src/test_support.ts";
import {
  type ScreenSnapshot,
  UUI_PROTOCOL_VERSION,
  type UUIClientMessage,
} from "/p/the8020/uui/mod.ts";
import { bindSession } from "../../../uui/session.ts";
import { withTestLocalization } from "../../../uui/test_localization.ts";

class TestChannel {
  readonly sessionId = "session-user-detail";
  readonly sent: unknown[] = [];
  #inputs: UUIClientMessage[] = [];
  #waiters: Array<(message: UUIClientMessage) => void> = [];

  send(message: unknown): void {
    this.sent.push(message);
  }

  receive(): Promise<UUIClientMessage> {
    const input = this.#inputs.shift();
    if (input !== undefined) return Promise.resolve(input);
    return new Promise((resolve) => this.#waiters.push(resolve));
  }

  push(message: UUIClientMessage): void {
    const waiter = this.#waiters.shift();
    if (waiter === undefined) this.#inputs.push(message);
    else waiter(message);
  }

  surface = "surface-1";

  screen(): ScreenSnapshot | undefined {
    for (const message of this.sent.toReversed()) {
      const value = message as {
        type?: string;
        presentation?: {
          activeSurfaceId: string | null;
          surfaces: Array<{ screen: ScreenSnapshot }>;
        };
      };
      if (
        value.type === "presentation.show" &&
        value.presentation?.activeSurfaceId != null
      ) {
        this.surface = value.presentation.activeSurfaceId;
        return value.presentation.surfaces.at(-1)?.screen;
      }
    }
    return undefined;
  }
}

async function shown(channel: TestChannel, failure: Promise<unknown>) {
  let error: unknown;
  failure.catch((cause) => error = cause);
  for (let attempt = 0; attempt < 200; attempt++) {
    const screen = channel.screen();
    if (screen !== undefined) return screen;
    if (error !== undefined) throw error;
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
  throw new Error("user detail was not shown");
}

let sequence = 0;

function event(channel: TestChannel, screen: ScreenSnapshot, action: string) {
  channel.push({
    type: "screen.event",
    protocol: UUI_PROTOCOL_VERSION,
    sessionId: channel.sessionId,
    surfaceId: channel.surface,
    screenId: screen.id,
    screenRevision: screen.revision,
    instanceId: screen.state.instanceId,
    screenState: {
      version: screen.state.version,
      scroll: screen.state.scroll,
      elements: {},
    },
    clientSequence: ++sequence,
    action,
    eventType: action === "back" ? "back" : "action",
    changes: [],
  });
}

/** Wait for a screen other than the one currently shown. */
async function next(channel: TestChannel, previous: ScreenSnapshot) {
  for (let attempt = 0; attempt < 200; attempt++) {
    const screen = channel.screen();
    if (
      screen !== undefined &&
      (screen.id !== previous.id || screen.revision !== previous.revision)
    ) return screen;
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
  throw new Error(`no screen followed ${previous.id}`);
}

Deno.test("user detail and My account open with the account type", () =>
  withTestLocalization(async () => {
    const fixture = await authDatabase();
    const users = await import("../../src/admin.ts");
    const { userDetail } = await import("./program.ts");
    try {
      await users.add("alice", "", "Alice", true);
      for (
        const [selfService, id] of [[false, "user-detail"], [
          true,
          "my-account",
        ]] as const
      ) {
        fixture.asUser(selfService ? "alice" : "system");
        const channel = new TestChannel();
        const unbind = bindSession(channel);
        try {
          const pending = userDetail("alice", selfService);
          const screen = await shown(channel, pending);
          assertEquals(screen.id, id);
          assertEquals(
            (screen.model as { technical?: boolean }).technical,
            true,
          );
          assertEquals(
            screen.controls.some((control) => control.bind === "technical"),
            true,
          );
          // Edit details offers the account type to administration only.
          event(channel, screen, "edit");
          const edit = await next(channel, screen);
          assertEquals(edit.id, "user-edit");
          assertEquals(
            edit.controls.some((control) => control.bind === "technical"),
            !selfService,
          );
          event(channel, edit, "back");
          let current = await next(channel, edit);
          for (
            const [action, opened] of [
              ["certificates", "user-certificates"],
              ["sign-ins", "user-sign-ins"],
            ] as const
          ) {
            event(channel, current, action);
            const page = await next(channel, current);
            assertEquals(page.id, opened);
            event(channel, page, "back");
            current = await next(channel, page);
            assertEquals(current.id, id);
          }
          event(channel, current, "back");
          await pending;
        } finally {
          unbind();
        }
      }
    } finally {
      fixture.close();
    }
  }));
