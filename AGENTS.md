# Purpose

- Own first-party users and authentication sessions as ordinary 80|20 database
  tables.
- This file is the root contract of the independent `the8020/users` repository.

# Ownership

- Own authored schemas, administrative command programs, user mutations, and
  opaque authentication sessions.
- Do not own UUI application sessions, authorization policy, password hashing,
  cookies, or database credentials; those remain kernel responsibilities.

# Local Contracts

- Password and cookie secrets are represented only by their existing strong
  hashes. Plaintext credentials never enter these tables.
- Authentication-session cleanup is indexed by expiry and safe across nodes.
- User and authentication-session listings use a bounded constant number of
  database queries; they never issue one query per returned row. Active-session
  counts require a current auth version, enabled user, and future expiry.
- Listing and summary queries never load password or authentication-session
  secret hashes into the program Worker.
- Users are ordinary peers until a future permissions package defines roles.
  Package programs own user/session transactions and obtain command passwords
  only from execution-scoped secure input. There are no kernel recovery-user
  commands or bootstrap-administrator identity.
- `cbus/commands/**/command.toml` maps visible `users.*` and `users.sessions.*`
  commands to non-discoverable ordinary programs. Their default exports receive
  untouched string arguments; invalid input, missing users, and duplicate users
  retain stable command error codes.
- Ordinary package table access uses `@the8020/db` and Kysely so logical values
  are encoded and decoded once by the shared descriptor codec. Package programs
  must not compensate for SQLite/PostgreSQL physical-value differences.

# Verification

- `deno task check` formats, lints, and type-checks all table modules.
- `deno task test` verifies stable identities and secret-bearing field shape.

# Child DOX Index
