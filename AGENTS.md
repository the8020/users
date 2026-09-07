Parent DOX: [8020 workspace](../AGENTS.md).

Framework source:
[agent0ai/dox/AGENTS.md](https://github.com/agent0ai/dox/blob/765ae4ac02cc884eefcd41a3d0f71941721adb89/AGENTS.md).

# DOX framework

- DOX is highly performant AGENTS.md hierarchy installed here
- Agent must follow DOX instructions across any edits

## Core Contract

- AGENTS.md files are binding work contracts for their subtrees
- Work products, source materials, instructions, records, assets, and durable
  docs must stay understandable from the nearest applicable AGENTS.md plus every
  parent AGENTS.md above it

## Read Before Editing

1. Read the root AGENTS.md
2. Identify every file or folder you expect to touch
3. Walk from the repository root to each target path
4. Read every AGENTS.md found along each route
5. If a parent AGENTS.md lists a child AGENTS.md whose scope contains the path,
   read that child and continue from there
6. Use the nearest AGENTS.md as the local contract and parent docs for repo-wide
   rules
7. If docs conflict, the closer doc controls local work details, but no child
   doc may weaken DOX

Do not rely on memory. Re-read the applicable DOX chain in the current session
before editing.

## Update After Editing

Every meaningful change requires a DOX pass before the task is done.

Update the closest owning AGENTS.md when a change affects:

- purpose, scope, ownership, or responsibilities
- durable structure, contracts, workflows, or operating rules
- required inputs, outputs, permissions, constraints, side effects, or artifacts
- user preferences about behavior, communication, process, organization, or
  quality
- AGENTS.md creation, deletion, move, rename, or index contents

Update parent docs when parent-level structure, ownership, workflow, or child
index changes. Update child docs when parent changes alter local rules. Remove
stale or contradictory text immediately. Small edits that do not change behavior
or contracts may leave docs unchanged, but the DOX pass still must happen.

## Hierarchy

- Root AGENTS.md is the DOX rail: project-wide instructions, global preferences,
  durable workflow rules, and the top-level Child DOX Index
- Child AGENTS.md files own domain-specific instructions and their own Child DOX
  Index
- Each parent explains what its direct children cover and what stays owned by
  the parent
- The closer a doc is to the work, the more specific and practical it must be

## Child Doc Shape

- Create a child AGENTS.md when a folder becomes a durable boundary with its own
  purpose, rules, responsibilities, workflow, materials, or quality standards
- Work Guidance must reflect the current standards of the project or user
  instructions; if there are no specific standards or instructions yet, leave it
  empty
- Verification must reflect an existing check; if no verification framework
  exists yet, leave it empty and update it when one exists

Default section order:

- Purpose
- Ownership
- Local Contracts
- Work Guidance
- Verification
- Child DOX Index

## Style

- Keep docs concise, current, and operational
- Document stable contracts, not diary entries
- Put broad rules in parent docs and concrete details in child docs
- Prefer direct bullets with explicit names
- Do not duplicate rules across many files unless each scope needs a local
  version
- Delete stale notes instead of explaining history
- Trim obvious statements, repeated rules, misplaced detail, and warnings for
  risks that no longer exist

## Closeout

1. Re-check changed paths against the DOX chain
2. Update nearest owning docs and any affected parents or children
3. Refresh every affected Child DOX Index
4. Remove stale or contradictory text
5. Run existing verification when relevant
6. Report any docs intentionally left unchanged and why

## User Preferences

When the user requests a durable behavior change, record it here or in the
relevant child AGENTS.md

## Child DOX Index

This root retains repository-wide contracts and files outside the child scopes
below.

- [cbus/AGENTS.md](cbus/AGENTS.md): Declare the public `users.*` and
  `users.sessions.*` administrative commands.
- [events/AGENTS.md](events/AGENTS.md): Schedule indexed authentication-session
  expiry cleanup.
- [hooks/AGENTS.md](hooks/AGENTS.md): Register the post-activation system-user
  initializer.
- [programs/AGENTS.md](programs/AGENTS.md): Expose account, password,
  authentication, and session administration entrypoints.
- [src/AGENTS.md](src/AGENTS.md): Own account operations, password hashing, and
  authentication-session policy.
- [tables/AGENTS.md](tables/AGENTS.md): Describe users and authentication
  sessions.
- [types/AGENTS.md](types/AGENTS.md): Define reusable user fields, structures,
  and paged value help for database and UUI consumers.

# Purpose

- Own first-party users and authentication sessions as ordinary 80|20 database
  tables.
- This file is the root contract of the independent `the8020/users` repository.

# Ownership

- Own authored schemas, administrative command programs, user mutations, and
  authentication sessions and token claims. The Users UUI program owns account
  lists and details, password editing, and sign-in administration.
- Own account/password rules, Argon2id hashing and verification, login/logout,
  session issuance/validation/revocation, and application cookie construction.
  Do not own UUI application sessions, private signing keys, kernel principals,
  sandbox lifecycle, or database credentials.

# Local Contracts

- Passwords are stored only as Argon2id PHC hashes with random salts. Signed
  JWTs contain an opaque session ID; no session secret/hash or token is stored
  in the sessions table. Credentials never enter diagnostics.
- Authentication-session cleanup is indexed by expiry and safe across nodes.
- User and authentication-session listings use a bounded constant number of
  database queries; they never issue one query per returned row. Active-session
  counts require a current auth version, enabled user, and future expiry.
- Listing and summary queries never load password hashes into the program
  Worker.
- Users are ordinary peers until a future permissions package defines roles.
  Package programs own user/session transactions and obtain command passwords
  only from execution-scoped secure input. There are no kernel recovery-user
  commands or bootstrap-administrator identity.
- Password presence alone controls login: an empty password hash means no login,
  including SSH key login. Creating a user without a password is supported;
  setting an empty password removes login and invalidates existing sessions.
  Listings expose only derived `has_password`, not a second login setting.
- `hooks/ensure-system-user.toml` declares `hook = "post-activate"` and selects
  `the8020/users/ensure-system-user`. Its ordinary program inserts an enabled,
  passwordless `system` user if absent. It never overwrites an existing user.
  System may be disabled, deleted, or given a password through the same commands
  as every other user.
- All kernel principals, including `system`, remain independent of these rows.
  Account creation, disabling, deletion, or table loss never changes execution
  identity or job admission. Login always requires an enabled password-bearing
  row.
- Flat `cbus/commands/*.toml` declarations use a required `command` field for
  the complete public name; filenames are arbitrary. They map visible `users.*`
  and `users.sessions.*` commands to non-discoverable ordinary programs. Their
  default exports receive untouched string arguments; invalid input, missing
  users, and duplicate users retain stable command error codes.
- Ordinary package table access uses `/p/the8020/db/mod.ts` and Kysely so
  logical values are encoded and decoded once by the shared descriptor codec.
  Package programs must not compensate for SQLite/PostgreSQL physical-value
  differences.
- `the8020/users/users` opens the account catalog or a supplied username. Shared
  user field help calls this ordinary program lazily; account details link to
  the UUI package's user-filtered sessions program. Keep sign-in status and
  common actions ahead of technical details and deletion, which live under
  Advanced. Mutations reuse `src/admin.ts`; UI programs never load password
  hashes.

- `mod.ts` exposes login/logout/currentUser and the shared authentication
  function. Protected HTTP/WebSocket request setup invokes it inside the
  existing target Worker using the ordinary bridge request scope. Public
  services never run it automatically and retain their configured execution
  user.
- Platform credentials use the lowercase `the8020-authorization` header and
  `the8020_auth` cookie. HTTP header selection remains case-insensitive.
- Login creates a 12-hour session, then returns the kernel-signed platform JWT
  and cookie header. JWT claims are iss/aud `the8020`, sub `user:<username>`,
  iat/exp in seconds, random 32-hex sid, and current account authVersion as ver.
  Deno checks the session's username/version/expiry and current account state.
- Password defaults are Argon2id v19, 64 MiB, three rounds, one lane, random
  16-byte salt, and 32-byte output. Use pinned noble-hashes; no kernel password
  API or authentication settings remain. Unknown accounts still take the KDF
  path.
- Explicit public logout verifies presented credentials through the kernel
  bridge when needed, revokes their session when valid, and always clears the
  cookie for absent/invalid/expired tokens. Revocation failure returns an error
  with cookie removal. Setting and clearing use Path=/, HttpOnly, SameSite=Lax,
  and Secure for HTTPS. Stale cookies do not block public login, which replaces
  them on success.
- Native SSH and console adapters use `programs/authenticate` through ordinary
  jobs with normal mounts and secure inputs. There is no extra authentication
  service, isolation, or execution mechanism. Minute expiry cleanup uses
  `events/cleanup-sessions.toml` with `event = "minute"` to invoke the existing
  sessions-cleanup program.

# Work Guidance

- Keep account and authentication policy in this Deno package and use the
  ordinary Worker and typed cryptographic bridge. Do not move login rules into
  the kernel or add a separate authentication runtime.
- Reuse user schemas and the shared database codec across consumers. Keep
  authentication-session lifetime distinct from UUI, terminal, and execution
  lifetimes, and verify policy changes through the relevant entrypoint with
  bounded queries and cleanup.

# Verification

- `deno task check` formats, lints, and type-checks all table modules and
  programs.
- `deno task test` verifies schemas, password behavior, SQLite-backed login,
  session revocation/disablement, header precedence, and stale-cookie removal.
