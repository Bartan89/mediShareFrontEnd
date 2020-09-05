import { StoreState } from "../types"

export const selectPosts = (state: StoreState) => state.posts

export const selectPostslength = (state: StoreState) => state.posts.length
