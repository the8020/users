Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Ship package-owned Argon2 and X.509 dependencies as separate bundles.

# Ownership

- `argon2.ts` pins the noble-hashes Argon2 entrypoint and supplies original
  types through `@deno-types`. Its generated `.js` bundle and upstream license
  notice ship with this package.
- `x509.ts` pins Peculiar X.509, its required reflection polyfill, and the ASN.1
  decoder used to reject trailing input. `x509.LICENSE` retains licenses for
  the bundled dependency closure. `src/certificates.ts` owns enrollment policy.

# Local Contracts

- `../src/password.ts` consumes this bundle. Password policy stays in ordinary
  application source; bundle only the external library.
- Regenerate and commit JavaScript when changing the pin. Preserve upstream
  exports and names; do not edit generated files.

# Work Guidance

# Verification

- Run `deno task bundle`, `deno task check`, and `deno task test` from the
  package root.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
