import { Post } from "../../types-app-wide/postTypes"

export const FETCH_POSTS = "FETCH_POSTS"
export const ADD_A_POST = "ADD_A_POST"

type FetchPosts = {
  type: typeof FETCH_POSTS
  posts: Post[]
}

type AddAPost = {
  type: typeof ADD_A_POST
  post: Post
}

export type PostsActionTypes = FetchPosts | AddAPost
