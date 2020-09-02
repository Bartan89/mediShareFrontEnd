import { LOGIN_SUCCESS, LOG_OUT } from "./actions"

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token)
      return { ...state, ...action.payload }

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
