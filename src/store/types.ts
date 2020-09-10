import { User } from "../types-app-wide/userTypes"
import { Post, Translation } from "../types-app-wide/postTypes"
import { MyVisual } from "../types-app-wide/visualTypes"

export type StoreState = {
  user: User
  post: Post
  posts: Post[]
  myposts: Post[]
  mypost: Translation
  myvisual: MyVisual
}

export type GetState = () => StoreState
