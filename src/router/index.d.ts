import "express-session";
import { tokenResponse, userResponse } from "../twitch";
import { IUser } from "../models/userData";
declare module "express-session" {
  interface SessionData {
    user: userResponse
    auth: tokenResponse
    claims: IUser
  }
}