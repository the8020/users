export {
  authenticate,
  authenticatePassword,
  clearCookie,
  currentUser,
  eligibleUser,
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
