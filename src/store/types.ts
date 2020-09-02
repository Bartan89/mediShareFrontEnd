import { User } from "../types-app-wide/userTypes"

export type StoreState = {
  user: User
}

export type GetState = () => StoreState
