import { Post } from "../../types-app-wide/postTypes"

export const FETCH_POSTS = "FETCH_POSTS"
export const ADD_ONE_POST = "ADD_ONE_POST"

type FetchPosts = {
  type: typeof FETCH_POSTS
  posts: Post[]
}

type AddOnePost = {
  type: typeof ADD_ONE_POST
  post: Post
}

// type LogoutSuccesAction = {
//   type: typeof LOG_OUT
//   user: null
// }

export type PostActionTypes = FetchPosts | AddOnePost
