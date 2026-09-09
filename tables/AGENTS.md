Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Describe users and authentication sessions.

# Ownership

- Own `users.ts` and `sessions.ts` and their descriptor tests; physical schema
  deployment remains kernel-owned.

# Local Contracts

- Authentication-session IDs and authentication versions reuse the shared
  account fields; datetime columns retain their logical datetime representation.

- Default-export authored table descriptors through `/p/the8020/db/mod.ts`;
  table identity follows the package and file path.
- Store password hashes only on user rows and never store session tokens or
  session secrets.
- `users.fullName` stores the shared profile's full name with an empty default.
- Keep expiry cleanup indexed and preserve account auth-version/session
  identities.
- Authentication sessions store shared type and transport fields with
  username/remote defaults, covering cookies and allowances in one table.
- Reuse the user fields from `../types/user.ts`; table-local keys and defaults
  remain explicit.

# Work Guidance

# Verification

- From the repository root, run `deno task check` and `deno task test`.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
