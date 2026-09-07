Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Own reusable user fields and structures for database and UUI consumers.

# Ownership

- `user.ts` exports `username` and the ordinary Zod `userSummary` structure.

# Local Contracts

- Field imports perform no queries. Value help lazily reads only usernames and
  enabled status, searches in the database, and returns one bounded page plus
  whether more results exist.
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
