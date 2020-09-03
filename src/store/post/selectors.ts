import { StoreState } from "../types"

export const selectPosts = (state: StoreState) => state.post.posts
