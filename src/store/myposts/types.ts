import { Post } from "../../types-app-wide/postTypes"

export const STORE_A_COPY = "STORE_A_COPY"

type storeACopy = {
  type: typeof STORE_A_COPY
  post: Post
}

export type myPostsActionTypes = storeACopy
