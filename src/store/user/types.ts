import { User } from "../../types-app-wide/userTypes"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOG_OUT = "LOG_OUT"
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID"
export const SOMETHING_ELSE = "SOMETHING_ELSE"

type LoginSuccesAction = {
  type: typeof LOGIN_SUCCESS
  user: User
}

type LogoutSuccesAction = {
  type: typeof LOG_OUT
  user: null
}

export type UserActionTypes = LoginSuccesAction | LogoutSuccesAction
