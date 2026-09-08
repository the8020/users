Parent DOX: [users/programs DOX](../AGENTS.md).

# Purpose

- Let signed-in users view and edit their own account details and password.

# Ownership

- Own the hidden My account program; the Users program owns shared forms and
  `../../src/admin.ts` owns profile and password mutations.

# Local Contracts

- Accept no target identity. Resolve `currentUser()` and reject unauthenticated
  calls before opening the shared detail screen in self-service mode.
- The UUI quick menu calls this program directly on an ordinary page surface.

# Work Guidance

- Reuse the Users forms and operations; do not introduce command-bus calls or
  another password implementation.

# Verification

- Run users `deno task check` and `deno task test`, plus UUI's
  `deno task test:programs-browser` for menu, editing, passwords, and
  navigation.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
