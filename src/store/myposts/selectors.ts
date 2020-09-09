import { StoreState } from "../types"
import { Post } from "../../types-app-wide/postTypes"

export const selectAllMyPost = (state: StoreState) => state.myposts

export const selectTranslation = (id: number) => (state: StoreState) => {
  return state.myposts.find((post) => {
    if (post.id === id) {
      return post
    }
  })
}
