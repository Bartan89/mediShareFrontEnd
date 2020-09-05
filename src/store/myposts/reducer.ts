import { STORE_A_COPY, myPostsActionTypes } from "./types"

const initialState: any = []

export default (state = initialState, action: myPostsActionTypes) => {
  switch (action.type) {
    case STORE_A_COPY:
      console.log(action.post)
      return [...state, action.post]

    default:
      return state
  }
}
