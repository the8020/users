import { kernel } from "@the8020/kernel";
import { timingSafeEqual } from "node:crypto";

const encoder = new TextEncoder();
const prefix = "$8020-hmac-sha256$v=1$";

function passwordBytes(password: string): Uint8Array | undefined {
  if (
    typeof password !== "string" || password.length === 0 ||
    password.length > 1_048_576
  ) return undefined;
  const bytes = encoder.encode(password);
  if (bytes.length <= 1_048_576) return bytes;
  bytes.fill(0);
  return undefined;
}

async function digest(username: string, bytes: Uint8Array, salt: Uint8Array) {
  try {
    const hash = await kernel.crypto.passwordDigest(username, bytes, salt);
    if (hash.length !== 32) throw new Error("invalid password digest");
    return hash;
  } finally {
    bytes.fill(0);
  }
}

export async function hashPassword(
  username: string,
  password: string,
): Promise<string> {
  if (
    typeof username !== "string" ||
    !/^[a-z0-9][a-z0-9_-]{1,30}[a-z0-9]$/.test(username)
  ) {
    throw new TypeError("invalid password username");
  }
  const bytes = passwordBytes(password);
  if (bytes === undefined) {
    throw new TypeError("password must contain 1 to 1048576 bytes");
  }
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await digest(username, bytes, salt);
  return `${prefix}${salt.toHex()}$${hash.toHex()}`;
}

export async function verifyPassword(
  username: string,
  encoded: string | undefined,
  password: string,
): Promise<boolean> {
  if (
    typeof username !== "string" ||
    !/^[a-z0-9][a-z0-9_-]{1,30}[a-z0-9]$/.test(username)
  ) return false;
  const match = /^\$8020-hmac-sha256\$v=1\$([a-f0-9]{32})\$([a-f0-9]{64})$/
    .exec(encoded ?? "");
  if (match === null) return false;
  const bytes = passwordBytes(password);
  if (bytes === undefined) return false;
  const actual = await digest(username, bytes, Uint8Array.fromHex(match[1]!));
  return timingSafeEqual(actual, Uint8Array.fromHex(match[2]!));
}
