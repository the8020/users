Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Register the post-activation system-user initializer.

# Ownership

- Own `ensure-system-user.toml`; the ordinary ensure-system-user program owns
  mutation.

# Local Contracts

- Insert an enabled passwordless system row only when absent; never overwrite an
  existing account.

# Work Guidance

# Verification

- Kernel package handler-index tests verify declaration contracts; run
  `go test ./kernel/packages/...` from the sibling kernel repository with its
  local Go environment.
- Run this package's `deno task check` for the referenced handler programs.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
