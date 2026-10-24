#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
DENO_COMMAND="${DENO_COMMAND:-deno}"
"$DENO_COMMAND" bundle --no-config --no-lock --keep-names --output vendor/x509.js vendor/x509.ts
