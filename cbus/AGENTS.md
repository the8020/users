Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Declare the public `users.*` and `users.sessions.*` administrative commands.

# Ownership

- Own the flat `commands/*.toml` declarations; the repository root owns package
  identity and `programs/` owns execution.

# Local Contracts

- Each declaration supplies the complete public name in `command` and references
  an ordinary program by its full `namespace/package/program` ID in `program`.
  Short names are invalid; the target may belong to another package.
- Keep declarations flat. Filenames do not define command identity, and
  duplicate public names are invalid.

## Explicit password transition and recovery

- This procedure is prepared for the incompatible v1 HMAC transition; it does
  not identify or reset any live instance. Select the intended instance and back
  up its database and original private master seed separately before an
  authorized rollout. Coordinate the matching kernel/runtime, users and services
  packages and UUI login declaration on every node; old Workers must be retired
  through the existing hard service restart or coordinated instance restart. Do
  not mix old/new password writers while resetting.
- Local native CBus needs no platform password/session. In the selected
  instance's native console, inspect `auth.users.roles <existing-admin>` and
  choose an existing administrator recovery account. Missing role assignments
  can be repaired with the existing
  `auth.users.assign <existing-admin> the8020.users.administrator`; reset itself
  preserves roles and does not grant authority.
- Run `users.reset-passwords <existing-admin> --confirm` and enter/confirm the
  new password at the secure prompt. For one-shot use:
  `admin --root /absolute/selected-instance users.reset-passwords <existing-admin> --confirm`.
  Automation may supply `--password-stdin` from a secure pipe; never put
  passwords in argv, documentation, logs or shell history. An empty recovery
  password, missing account, failed key derivation or failed SQL aborts the
  reset.
- Successful reset clears every platform password and authentication-session
  row, increments account versions and enables the chosen recovery account with
  its new password. Certificates, roles and custom-service stores are preserved.
  Already-running work is not terminated by account changes; the coordinated
  hard restart above ends old service streams/Workers. Future token requests
  recheck session/version state through existing policy.
- Sign in as recovery administrator, then issue new passwords through ordinary
  `users.set-password` secure prompts. Old Argon2 hashes cannot be converted
  without plaintext and are never accepted by the new verifier.
- Failure rolls back the complete transaction. After a lost response or restart,
  test recovery login and inspect account/session summaries before deciding to
  retry. Repeating the confirmed command safely retains recovery access, but is
  a fresh all-user reset and revokes any credentials issued since its last
  success. No background retry or completion marker exists.
- Master loss/rotation changes all password digests. Restore the original master
  with the matching backup, or repeat the approved credential reset after
  provisioning the same new master on every node. Rotation also invalidates
  tokens and makes existing encrypted secrets unreadable; this command does not
  migrate ciphertext or custom stores.

# Work Guidance

- Keep command behavior in the owning program or shared implementation.

# Verification

- Kernel CBus discovery and package tests cover declaration validation; use
  `go test ./kernel/cbus/... ./kernel/packages/...` from the sibling kernel
  repository with its local Go environment.
- Run this package's `deno task check` for the referenced program sources.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
