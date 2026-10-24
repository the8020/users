import { kernel, type TokenClaims } from "@the8020/kernel";
import { context } from "@the8020/context";
import Users from "../tables/users.ts";
import Sessions from "../tables/sessions.ts";
import Certificates from "../tables/certificates.ts";
import { certificate } from "../types/certificate.ts";
import { verifyPassword } from "./password.ts";
import { getSystemProfile } from "/p/the8020/system/profile.ts";

export const tokenHeader = "the8020-authorization";
export async function authenticationCookie(): Promise<string> {
  return `the8020_auth_${(await getSystemProfile()).id}`;
}
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

export async function requestToken(request: Request): Promise<string> {
  const header = request.headers.get(tokenHeader);
  if (header !== null) {
    return /^Bearer\s+(\S+)$/i.exec(header.trim())?.[1] ?? "";
  }
  const tokenCookie = await authenticationCookie();
  const cookies = (request.headers.get("cookie") ?? "").split(";")
    .map((part) => part.trim()).filter((part) =>
      part.startsWith(`${tokenCookie}=`)
    );
  return cookies.length === 1 ? cookies[0]!.slice(tokenCookie.length + 1) : "";
}

async function cookie(
  token: string,
  request: Request,
  expires: Date,
): Promise<string> {
  const tokenCookie = await authenticationCookie();
  return `${tokenCookie}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${
    token === "" ? 0 : sessionSeconds
  }; Expires=${expires.toUTCString()}${
    new URL(request.url).protocol === "https:" ? "; Secure" : ""
  }`;
}

export function clearCookie(request: Request): Promise<string> {
  return cookie("", request, new Date(0));
}

// Password presence applies to password and SSH-key login. Kernel principals
// do not depend on these rows or eligibility rules.
export async function eligibleUser(
  username: string,
): Promise<User | undefined> {
  if (!/^[a-z0-9][a-z0-9_-]{1,30}[a-z0-9]$/.test(username)) return undefined;
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

/** Native admission has already established possession of this certificate's key. */
export async function authenticateCertificate(
  fingerprint: string,
): Promise<User | undefined> {
  if (!certificate.shape.fingerprint.safeParse(fingerprint).success) {
    return undefined;
  }
  const now = new Date();
  const account = await Certificates.select([Certificates.username])
    .innerJoin(Users.table, Users.username, Certificates.username)
    .where(Certificates.fingerprint, "=", fingerprint)
    .where(Certificates.validFrom, "<=", now)
    .where(Certificates.expiresAt, ">", now)
    .where(Users.enabled, "=", true).executeTakeFirst();
  // Certificate-only accounts need no password. Password/token/SSH policy is unchanged.
  return account ? identity(account.username) : undefined;
}

async function passwordAccount(username: string, password: string) {
  const account = /^[a-z0-9][a-z0-9_-]{1,30}[a-z0-9]$/.test(username)
    ? await Users.selectAll().where(Users.username, "=", username)
      .executeTakeFirst()
    : undefined;
  const matches = await verifyPassword(
    username,
    account?.passwordHash,
    password,
  );
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
  const session = await issueSession(account, "username", "remote");
  return {
    authenticated: true,
    user: identity(account.username),
    token: session.token,
    setCookie: await cookie(session.token, request, session.expires),
  };
}

/** Native sandbox callers execute as their kernel-authenticated owner. */
export async function issueAllowance(transport: "local" | "remote" = "local") {
  if (transport !== "local" && transport !== "remote") {
    throw new TypeError("Invalid token transport");
  }
  const account = await Users.selectAll().where(
    Users.username,
    "=",
    context.username,
  ).executeTakeFirst();
  if (!account?.enabled || account.passwordHash === "") {
    throw new Error("This account cannot sign in");
  }
  const session = await issueSession(account, "token", transport);
  return { token: session.token, expiresAt: session.expires.toISOString() };
}

async function issueSession(
  account: { username: string; authVersion: number },
  type: "username" | "token",
  transport: "local" | "remote",
) {
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
    transport,
  });
  await Sessions.insert({
    sessionId,
    username: account.username,
    authVersion: account.authVersion,
    createdAt: new Date(now * 1000),
    expiresAt: expires,
    type,
    transport,
  }).execute();
  return { token, expires };
}

// This accepts only claims already verified by the kernel, including explicit
// verification performed by native transports through their ordinary program.
export async function validateSession(
  claims: TokenClaims,
): Promise<User | undefined> {
  if (
    typeof claims.sub !== "string" ||
    !/^user:[a-z0-9][a-z0-9_-]{1,30}[a-z0-9]$/.test(claims.sub) ||
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
    session.authVersion !== claims.ver || session.expiresAt <= new Date() ||
    session.transport !== (claims.transport ?? "remote")
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
  input: { method: "token"; claims: TokenClaims; fromCookie?: boolean } | {
    method: "password";
    username: string;
  } | { method: "certificate"; fingerprint: string },
  policy: UnauthenticatedPolicy,
): Promise<Response | { userId: string; username: string }> {
  const user = input.method === "token"
    ? await validateSession(input.claims)
    : input.method === "password"
    ? await authenticatePassword(
      input.username,
      kernel.execution.secret("password"),
    )
    : input.method === "certificate"
    ? await authenticateCertificate(input.fingerprint)
    : undefined;
  if (user !== undefined) return { userId: user.id, username: user.username };
  const headers = new Headers({ "cache-control": "no-store" });
  if (
    input.method === "token" && input.fromCookie === true
  ) {
    headers.set("set-cookie", await clearCookie(request));
  }
  if (policy.action === "redirect") {
    headers.set("location", policy.redirect_url!);
    return new Response(null, { status: policy.status, headers });
  }
  if (policy.status === 401) {
    headers.set("www-authenticate", 'Basic realm="80|20", charset="UTF-8"');
  }
  headers.set("content-type", "text/plain; charset=utf-8");
  return new Response(policy.message ?? "Authentication required", {
    status: policy.status,
    headers,
  });
}

export async function logout(request: Request): Promise<Response> {
  const headers = new Headers({
    "set-cookie": await clearCookie(request),
    "cache-control": "no-store",
  });
  try {
    const claims = await kernel.crypto.token.verify(
      await requestToken(request),
    );
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
