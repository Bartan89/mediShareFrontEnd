import { ADD_CONTENT, PostActionTypes, ADD_STATUS } from "./types"
import { Post } from "../../types-app-wide/postTypes"

const initialState: Post = {
  id: null,
  content: null,
  status: "Draft"
}

export default (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case ADD_CONTENT:
      return { ...state, content: action.content }

    case ADD_STATUS:
      return { ...state, status: action.status }

    default:
      return state
  }
}
