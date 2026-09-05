Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Schedule indexed authentication-session expiry cleanup.

# Ownership

- Own `cleanup-sessions.toml`; the sessions-cleanup program owns execution.

# Local Contracts

- Use the explicit minute event and ordinary full program identity; cleanup must
  remain safe across nodes.

# Work Guidance

# Verification

- Kernel package handler-index tests verify declaration contracts; run
  `go test ./kernel/packages/...` from the sibling kernel repository with its
  local Go environment.
- Run this package's `deno task check` for the referenced handler programs.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
