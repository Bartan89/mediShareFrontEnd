import { User } from "../types-app-wide/userTypes"
import { Post, Translation } from "../types-app-wide/postTypes"

export type StoreState = {
  user: User
  post: Post
  posts: Post[]
  myposts: Post[]
  mypost: Translation
}

export type GetState = () => StoreState
