// Package dependencies use qualified imports under the shared runtime import map.
// deno-lint-ignore no-import-prefix
import { argon2idAsync } from "npm:@noble/hashes@2.4.0/argon2.js";
import { timingSafeEqual } from "node:crypto";

const parameters = { m: 65536, t: 3, p: 1, dkLen: 32 };
const encoder = new TextEncoder();
const dummy =
  "$argon2id$v=19$m=65536,t=3,p=1$AAAAAAAAAAAAAAAAAAAAAA$AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

export async function hashPassword(password: string): Promise<string> {
  const bytes = encoder.encode(password);
  if (bytes.length === 0 || bytes.length > 1_048_576) {
    throw new TypeError("password must contain 1 to 1048576 bytes");
  }
  const salt = crypto.getRandomValues(new Uint8Array(16));
  try {
    const hash = await argon2idAsync(bytes, salt, parameters);
    return `$argon2id$v=19$m=${parameters.m},t=${parameters.t},p=${parameters.p}$${
      salt.toBase64({ omitPadding: true })
    }$${hash.toBase64({ omitPadding: true })}`;
  } finally {
    bytes.fill(0);
  }
}

export async function verifyPassword(
  encoded: string | undefined,
  password: string,
): Promise<boolean> {
  const bytes = encoder.encode(password);
  if (bytes.length === 0 || bytes.length > 1_048_576) return false;
  try {
    const match =
      /^\$argon2id\$v=19\$m=(\d+),t=(\d+),p=(\d+)\$([A-Za-z0-9+/]+)\$([A-Za-z0-9+/]+)$/
        .exec(encoded || dummy);
    if (match === null) return false;
    const [, memory, rounds, lanes, saltText, hashText] = match;
    const m = Number(memory), t = Number(rounds), p = Number(lanes);
    if (p < 1 || p > 255 || m < 8 * p || m > 1048576 || t < 1 || t > 1000) {
      return false;
    }
    let salt: Uint8Array, expected: Uint8Array;
    try {
      salt = Uint8Array.fromBase64(saltText!);
      expected = Uint8Array.fromBase64(hashText!);
    } catch {
      return false;
    }
    if (
      salt.length < 8 || salt.length > 1024 || expected.length < 16 ||
      expected.length > 1024
    ) return false;
    const actual = await argon2idAsync(bytes, salt, {
      m,
      t,
      p,
      dkLen: expected.length,
    });
    return timingSafeEqual(actual, expected) && Boolean(encoded);
  } finally {
    bytes.fill(0);
  }
}
