Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Expose account, password, authentication, and session administration
  entrypoints.

# Ownership

- Own manifests and ordinary programs; `../src/` owns shared authentication and
  account behavior. The users child owns interactive account administration.

# Local Contracts

- Preserve raw command arguments and stable intentional command error codes.
- Use execution-scoped secure input for passwords and the existing ordinary job
  path for SSH/console authentication.
- Account eligibility governs interactive login and stays independent from
  structural kernel execution principals.
- Authenticate's `allowance` operation uses the calling execution owner and
  issues a local users token. The native sandbox adapter supplies that owner; a
  positional username never selects the allowance's identity.

# Work Guidance

# Verification

- From the repository root, run `deno task check` and `deno task test`.

# Child DOX Index

- [users/AGENTS.md](users/AGENTS.md): Provide the account catalog, linked user
  detail, passwords, sign-ins, and advanced account actions.
- [my-account/AGENTS.md](my-account/AGENTS.md): Open the authenticated user's
  profile and password forms from the UUI quick menu.
