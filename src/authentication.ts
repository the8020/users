import { kernel, type TokenClaims } from "@the8020/kernel";
import { context } from "@the8020/context";
import Users from "../tables/users.ts";
import Sessions from "../tables/sessions.ts";
import { verifyPassword } from "./password.ts";

export const tokenHeader = "the8020-authorization";
export const tokenCookie = "the8020_auth";
const sessionSeconds = 12 * 60 * 60;

export interface User {
  id: string;
  username: string;
  realm: "user";
}

export interface LoginResult {
  authenticated: boolean;
  user?: User;
  token?: string;
  setCookie?: string;
}

export interface UnauthenticatedPolicy {
  action: string;
  status: number;
  message?: string;
  redirect_url?: string;
}

function identity(username: string): User {
  return { id: `user:${username}`, username, realm: "user" };
}

export function currentUser(): User | undefined {
  return context.authenticated ? identity(context.username) : undefined;
}

export function requestToken(request: Request): string {
  const header = request.headers.get(tokenHeader);
  if (header !== null) {
    return /^Bearer\s+(\S+)$/i.exec(header.trim())?.[1] ?? "";
  }
  const cookies = (request.headers.get("cookie") ?? "").split(";")
    .map((part) => part.trim()).filter((part) =>
      part.startsWith(`${tokenCookie}=`)
    );
  return cookies.length === 1 ? cookies[0]!.slice(tokenCookie.length + 1) : "";
}

function cookie(token: string, request: Request, expires: Date): string {
  return `${tokenCookie}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${
    token === "" ? 0 : sessionSeconds
  }; Expires=${expires.toUTCString()}${
    new URL(request.url).protocol === "https:" ? "; Secure" : ""
  }`;
}

export function clearCookie(request: Request): string {
  return cookie("", request, new Date(0));
}

// Password presence applies to password and SSH-key login. Kernel principals
// do not depend on these rows or eligibility rules.
export async function eligibleUser(
  username: string,
): Promise<User | undefined> {
  if (!/^[a-z0-9]{3,32}$/.test(username)) return undefined;
  const account = await Users.select([
    Users.username,
    Users.enabled,
    Users.passwordHash,
  ])
    .where(Users.username, "=", username).executeTakeFirst();
  return account?.enabled && account.passwordHash !== ""
    ? identity(username)
    : undefined;
}

async function passwordAccount(username: string, password: string) {
  const account = /^[a-z0-9]{3,32}$/.test(username)
    ? await Users.selectAll().where(Users.username, "=", username)
      .executeTakeFirst()
    : undefined;
  const matches = await verifyPassword(account?.passwordHash, password);
  return matches && account?.enabled ? account : undefined;
}

export async function authenticatePassword(
  username: string,
  password: string,
): Promise<User | undefined> {
  const account = await passwordAccount(username, password);
  return account === undefined ? undefined : identity(account.username);
}

export async function login(
  request: Request,
  input: { username: string; password: string },
): Promise<LoginResult> {
  const account = await passwordAccount(input.username, input.password);
  if (account === undefined) return { authenticated: false };
  const now = Math.floor(Date.now() / 1000);
  const sessionId = crypto.getRandomValues(new Uint8Array(16)).toHex();
  const expires = new Date((now + sessionSeconds) * 1000);
  const token = await kernel.crypto.token.sign({
    iss: "the8020",
    aud: "the8020",
    sub: `user:${account.username}`,
    iat: now,
    exp: now + sessionSeconds,
    sid: sessionId,
    ver: account.authVersion,
  });
  await Sessions.insert({
    sessionId,
    username: account.username,
    authVersion: account.authVersion,
    createdAt: new Date(now * 1000),
    expiresAt: expires,
  }).execute();
  return {
    authenticated: true,
    user: identity(account.username),
    token,
    setCookie: cookie(token, request, expires),
  };
}

// This accepts only claims already verified by the kernel, including explicit
// verification performed by native transports through their ordinary program.
export async function validateSession(
  claims: TokenClaims,
): Promise<User | undefined> {
  if (
    typeof claims.sub !== "string" ||
    !/^user:[a-z0-9]{3,32}$/.test(claims.sub) ||
    typeof claims.sid !== "string" || !/^[a-f0-9]{32}$/.test(claims.sid) ||
    !Number.isSafeInteger(claims.ver) || Number(claims.ver) < 1
  ) return undefined;
  const username = claims.sub.slice(5);
  const session = await Sessions.selectAll().where(
    Sessions.sessionId,
    "=",
    claims.sid,
  ).executeTakeFirst();
  if (
    session === undefined || session.username !== username ||
    session.authVersion !== claims.ver || session.expiresAt <= new Date()
  ) return undefined;
  const account = await Users.selectAll().where(Users.username, "=", username)
    .executeTakeFirst();
  if (
    !account?.enabled || account.passwordHash === "" ||
    account.authVersion !== claims.ver
  ) return undefined;
  return identity(username);
}

// Called by the existing target Worker during request setup. Public services
// never invoke this hook automatically.
export async function authenticate(
  request: Request,
  claims: TokenClaims,
  policy: UnauthenticatedPolicy,
): Promise<Response | undefined> {
  if (await validateSession(claims) !== undefined) return undefined;
  const headers = new Headers({ "cache-control": "no-store" });
  if (!request.headers.has(tokenHeader) && request.headers.has("cookie")) {
    headers.set("set-cookie", clearCookie(request));
  }
  if (policy.action === "redirect") {
    headers.set("location", policy.redirect_url!);
    return new Response(null, { status: policy.status, headers });
  }
  headers.set("content-type", "text/plain; charset=utf-8");
  return new Response(policy.message ?? "Authentication required", {
    status: policy.status,
    headers,
  });
}

export async function logout(request: Request): Promise<Response> {
  const headers = new Headers({
    "set-cookie": clearCookie(request),
    "cache-control": "no-store",
  });
  try {
    const claims = await kernel.crypto.token.verify(requestToken(request));
    if (
      claims !== null && typeof claims.sid === "string" &&
      typeof claims.sub === "string"
    ) {
      await Sessions.delete().where(Sessions.sessionId, "=", claims.sid)
        .where(Sessions.username, "=", claims.sub.slice(5)).execute();
    }
  } catch {
    return new Response("Session revocation failed", { status: 503, headers });
  }
  return new Response(null, { status: 204, headers });
}
