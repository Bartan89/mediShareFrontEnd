import { Status, Translation } from "../../types-app-wide/postTypes"
import { STORE_TRANSLATION, myPostActionTypes, SET_SPINNER } from "./types"
import {} from "../myposts/types"

const initialState: Translation = {
  id: null,
  content: null,
  loading: false
}

export default (state = initialState, action: myPostActionTypes) => {
  switch (action.type) {
    case STORE_TRANSLATION:
      return { ...state, content: action.translation.content, id: action.translation.id, snapshot: Date.now() }

    case SET_SPINNER:
      return { ...state, loading: !state.loading }

    default:
      return state
  }
}
