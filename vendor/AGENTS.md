Parent DOX: [users DOX](../AGENTS.md).

# Purpose

- Ship the package-owned X.509 dependency bundle.

# Ownership

- `x509.ts` pins Peculiar X.509, its required reflection polyfill, and the ASN.1
  decoder used to reject trailing input. `x509.LICENSE` retains licenses for
  the bundled dependency closure. `src/certificates.ts` owns enrollment policy.

# Local Contracts

- `../src/certificates.ts` consumes this bundle. Passwords use platform crypto;
  bundle only the external certificate library.
- Regenerate and commit JavaScript when changing the pin. Preserve upstream
  exports and names; do not edit generated files.

# Work Guidance

# Verification

- Run `deno task bundle`, `deno task check`, and `deno task test` from the
  package root.

# Child DOX Index

No child DOX documents. This document owns the entire local scope.
