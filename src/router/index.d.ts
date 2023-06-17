import "express-session";
import { tokenResponse, userResponse } from "../twitch";
declare module "express-session" {
  interface SessionData {
    user: userResponse
    auth: tokenResponse
  }
}