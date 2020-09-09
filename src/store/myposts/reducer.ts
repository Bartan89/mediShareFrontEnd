import { Post } from "../../types-app-wide/postTypes"
import { DELETE_ONE_OF_MY_POST, myPostsActionTypes, STORE_A_COPY, ADD_TRANSLATION_TO_MY_POST } from "./types"
import { Action } from "redux"

const initialState: any = []

export default (state = initialState, action: myPostsActionTypes) => {
  switch (action.type) {
    case STORE_A_COPY:
      console.log(action.posts)
      return action.posts

    case DELETE_ONE_OF_MY_POST:
      return state.filter((element: Post) => {
        if (action.post.id === element.id) {
          return
        } else {
          return element
        }
      })

    case ADD_TRANSLATION_TO_MY_POST:
      return state.map((element: Post) => {
        if (action.translation.id === element.id) {
          return { ...element, translation: action.translation.content }
        } else {
          return { ...element }
        }
      })

    default:
      return state
  }
}
