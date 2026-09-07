Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Own account operations, password hashing, and authentication-session policy.

# Ownership

- Own `admin.ts`, `authentication.ts`, `password.ts`, and authentication tests;
  root `mod.ts` exposes the public API.

# Local Contracts

- Use salted Argon2id PHC hashes and bounded constant-query account/session
  listings without loading hashes for summaries.
- `admin.user(username)` supplies one non-secret account summary to both
  mutations and UUI. `listSessions(username?)` filters at the database when
  supplied, while parameterless command behavior remains unchanged.
- Authenticate within the existing target Worker; the kernel owns JWT signing
  and verification while this package validates account/session policy.
- Login and logout own cookie construction and revocation; credentials never
  enter diagnostics.

# Work Guidance

- Apply account policy through this shared implementation across HTTP,
  command, and native-adapter entrypoints. Keep principal integrity in the
  kernel, session decisions here, and database representations in the shared
  codec; verify failures at the owner and the affected entrypoint.

# Verification

- From the repository root, run `deno task check` and `deno task test`.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
