export {
  authenticate,
  authenticateCertificate,
  authenticatePassword,
  authenticationCookie,
  clearCookie,
  currentUser,
  eligibleUser,
  interfaceUser,
  issueAllowance,
  login,
  logout,
  requestToken,
  validateSession,
} from "./src/authentication.ts";
export type {
  LoginResult,
  UnauthenticatedPolicy,
  User,
} from "./src/authentication.ts";
