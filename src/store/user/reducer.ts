import { LOGIN_SUCCESS, LOG_OUT, UserActionTypes } from "./types"

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null
}

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("action", action)
      if (action.user.token) {
        localStorage.setItem("token", action.user.token)
      }
      return { ...state, ...action.user }

    case LOG_OUT:
      console.log("hello from logout in reducer")
      localStorage.removeItem("token")
      return { ...initialState, token: null }

    // case TOKEN_STILL_VALID:
    //   return { ...state, ...action.payload }

    default:
      return state
  }
}
