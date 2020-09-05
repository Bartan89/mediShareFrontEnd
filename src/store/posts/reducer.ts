import { FETCH_POSTS, PostsActionTypes, ADD_A_POST } from "./types"

const initialState: any = []

export default (state = initialState, action: PostsActionTypes) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts

    case ADD_A_POST:
      return [...state, action.post]

    default:
      return state
  }
}
