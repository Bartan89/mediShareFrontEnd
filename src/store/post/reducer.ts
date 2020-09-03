import { FETCH_POSTS, PostActionTypes, ADD_ONE_POST } from "./types"

const initialState = {
  posts: []
}

export default (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { posts: action.posts }

    case ADD_ONE_POST:
      return { posts: [...state.posts, action.post] }
    default:
      return state
  }
}
