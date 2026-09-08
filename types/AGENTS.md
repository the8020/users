Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Own reusable user fields and structures for database and UUI consumers.

# Ownership

- `user.ts` exports `username`, the editable `userProfile` structure, and
  `userSummary`. Profile fields are shared by storage, validation, and screens.

# Local Contracts

- `accountInfo`, `newUsername`, and `authenticationSession` own labels and help
  for account status, password inputs, technical details, and sign-ins. Password
  controls remain screen-owned and start empty; creation usernames have no
  existing-account lookup or navigation.

- Field imports perform no queries. Value help exposes username, full name, and
  enabled fields, with username first. The shared SQL lookup applies full list
  queries before paging and returns matching counts; credentials never enter
  lookup results.
- `username.open` lazily calls the owning Users UUI program with the value;
  importing field definitions never loads a screen or performs runtime work.
- Include disabled accounts for references to historical work and identify them
  in the result. Account eligibility and creation rules remain owned by `src/`.
- Consumers import these definitions directly; `types/` is a convention, not a
  runtime discovery mechanism.

# Work Guidance

- Keep names and help reusable. Screen-specific positioning and labels belong
  with the consuming program.

# Verification

- From the repository root, run `deno task check` and `deno task test`.
- The SQLite authentication test exercises user lookup search and pagination.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
