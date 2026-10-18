Parent DOX: [users/programs DOX](../AGENTS.md).

# Purpose

- Administer user accounts and provide the destination for shared user fields.

# Ownership

- Own the Users manifest and ordinary account, password, sign-in, and advanced
  screens. `../../src/admin.ts` owns account queries and mutations.
- Export `userDetail` for My account to reuse the profile and password forms.
- `certificates.ts` supplies the shared own-account and administrative
  certificate list, public PEM/DER upload, details, and confirmed removal.

# Local Contracts

- Account and certificate creation, list refresh, and Sign out all live in their
  owning list toolbars. Detail and confirmation actions remain with their forms.

- Administrative user detail exposes Roles and opens `the8020/auth/user-roles`
  with the selected username. The auth package owns personal-role creation,
  assignment editing, role details, and navigation back to users.

- Account, password, and sign-in fields reuse `types/user.ts` labels and help;
  only presentation hints belong in the screen.

- The default function opens the catalog or a supplied username. Retain Models
  across refreshes and use ordinary UUI pages/modals for related screens.
- Reuse semantic username/userSummary definitions in list and detail schemas.
  Read-only usernames retain value help and navigation on account details. Put
  sign-in status and common account actions first. Keep authentication version,
  timestamps, and deletion under Advanced.
- List full names and edit them through the shared `userProfile` schema in a
  modal. Save persists; Back cancels. Self-service hides and rejects enablement,
  Advanced/deletion, and password-removal actions.
- Password forms begin empty and clear submitted values after success/failure.
  Never load stored hashes or passwords. Creating a passwordless account remains
  supported; removing a password, disabling, and deleting require confirmation.
- Read sign-ins with the username filter at the query boundary. Open sessions
  calls the owning UUI program with that username.
- Sign-ins show username/token type and local/remote access; revocation is
  shared by both kinds of authentication.
- Certificate uploads use UUI's bounded binary picker; only filenames enter the
  form Model. Enrollment and removal permissions stay in `src/certificates.ts`.

# Work Guidance

- Explain account outcomes in ordinary language; avoid runtime identifiers in
  the main screens.

# Verification

- Run `deno task check` and `deno task test` from the repository root.
- UUI's `deno task test:programs-browser` drives the real screens with SQLite,
  including full-name/password/enable changes, My account from the quick menu,
  retained navigation, and desktop/mobile layouts.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
