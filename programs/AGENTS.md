Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Expose account, password, authentication, and session administration
  entrypoints.

# Ownership

- Own manifests and ordinary programs; `../src/` owns shared authentication and
  account behavior.

# Local Contracts

- Preserve raw command arguments and stable intentional command error codes.
- Use execution-scoped secure input for passwords and the existing ordinary job
  path for SSH/console authentication.
- Account eligibility governs interactive login and stays independent from
  structural kernel execution principals.

# Work Guidance

# Verification

- From the repository root, run `deno task check` and `deno task test`.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
