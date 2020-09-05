import { Dispatch } from "redux"
import { GetState } from "../types"
import { Post } from "../../types-app-wide/postTypes"
import { STORE_A_COPY } from "./types"

export function copyAndStoreApost(id: number | null) {
  return (dispatch: Dispatch, getState: GetState) => {
    const foundPost: any = getState().posts.find((post) => post.id === id)

    dispatch(storeCopy(foundPost))
  }
}

function storeCopy(post: Post) {
  return {
    type: STORE_A_COPY,
    post
  }
}
