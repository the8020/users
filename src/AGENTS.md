Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Own account operations, password hashing, and authentication-session policy.

# Ownership

- Own `admin.ts`, `authentication.ts`, `password.ts`, `certificates.ts`, and
  authentication tests; root `mod.ts` exposes the public API.

# Local Contracts

- Account mutations enforce the declared `users.user.*` actions before writes or
  password hashing. Own profile/password replacement and sign-in revocation
  remain self-service. Creating accounts leaves roles absent.
- `remove` deletes only users-owned account, certificate, and sign-in records,
  then emits `users.deleted` with `{ username }` after commit. Other packages
  own cleanup through their event subscriptions; never call their cleanup here.
  An emission error reports the committed deletion explicitly.

- Use salted Argon2id PHC hashes and bounded constant-query account/session
  listings without loading hashes for summaries.
- `admin.user(username)` supplies one non-secret account summary to both
  mutations and UUI. `listSessions(username?)` filters at the database when
  supplied, while parameterless command behavior remains unchanged.
- `add` accepts an optional full name; `updateDetails` validates the shared
  profile schema and updates details/timestamp without changing authentication
  version or sessions. Both administration and self-service reuse `setPassword`
  for hashing and session invalidation.
- HTTP token, Basic, and certificate policy run directly in the existing target
  Worker through `authenticate`. The hook calls the shared account/session
  functions, consumes password via `kernel.execution.secret`, and returns a
  canonical user or rejection Response. Cookie provenance accompanies verified
  token claims; raw credentials never reach handlers. Basic/certificate checks
  create no session. Native transports retain the ordinary authenticate program;
  Go retains JWT and TLS cryptographic/transport validation.
- This package alone validates session representation: `sid` is 32 lowercase hex
  characters and `ver` is a positive safe integer, checked before database
  access. The kernel treats session fields as opaque, while retaining signed
  principal, time, and transport validation. Tokens use the master's derived
  `app-session-cookie` key through the existing token API.
- Login and logout own cookie construction and revocation; credentials never
  enter diagnostics. `authenticationCookie()` and `requestToken()` are async;
  cookie selection and clearing use `the8020_auth_<system ID>` from the system
  profile, ignoring cookies issued by other systems on the same hostname.
- Login and allowance issuance share `issueSession`; allowance ownership comes
  from the trusted execution context. Validate signed transport against the
  session row and include type/transport in the existing sign-in listing.
- `certificates.ts` owns enrollment, bounded user listings, and removal. It also
  owns expiry display: whole remaining days rounded down, `warning` below
  `CERTIFICATE_WARNING_DAYS` (30) and `danger` below `CERTIFICATE_URGENT_DAYS`
  (10), and the first-expiring currently valid certificate of a user.
  `authentication.ts` resolves enabled accounts by exact SHA-256 DER fingerprint
  without importing the enrollment parser or administration dependencies.
  Enrollment parses public certificates with the vendored X.509 library; Deno's
  Node-compatible `keyUsage` does not expose the extended usages needed here.
  Basic/extended usage and validity are checked at enrollment; TLS and native
  admission independently validate presented certificates. No certificate
  approval cache or password requirement applies to this authentication method.
- Enrollment accepts PEM text, PEM file bytes, and DER file bytes at the same
  owner boundary; all forms reject extra certificates and private-key content.

# Work Guidance

- Apply account policy through this shared implementation across HTTP, command,
  and native-adapter entrypoints. Keep principal integrity in the kernel,
  session decisions here, and database representations in the shared codec;
  verify failures at the owner and the affected entrypoint.

# Verification

- From the repository root, run `deno task check` and `deno task test`.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
