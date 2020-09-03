import { LOGIN_SUCCESS, LOG_OUT, UserActionTypes } from "./types"

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null
}

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (action.user.token !== null) {
        localStorage.setItem("token", action.user.token)
      }

      return { ...state, ...action.user }

    case LOG_OUT:
      if (action.user) console.log("hello from logout in reducer")
      localStorage.removeItem("token")
      return { ...initialState, token: null }

    default:
      return state
  }
}
