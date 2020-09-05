import { User } from "../types-app-wide/userTypes"
import { Post } from "../types-app-wide/postTypes"

export type StoreState = {
  user: User
  post: Post
  posts: Post[]
}

export type GetState = () => StoreState
