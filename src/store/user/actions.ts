//import { Dispatch } from "redux" ---> npm i @types/redux
//import { GetState } from "../" // You define GetState just like you define any other object, you just have to make sure it has exactly the same structure as your store

import Axios from "axios"
import { Credentials, SignUpInput, User } from "../../types-app-wide/userTypes"
import { API_URL } from "../../config/constants"
import { LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID } from "./types"
import { GetState } from "../types"
import { Dispatch } from "redux"

export function login(userInfo: Credentials) {
  return async (dispatch: Dispatch, getState: GetState) => {
    try {
      const response = await Axios.post(`${API_URL}login`, userInfo)
      dispatch(loginSucces(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

function loginSucces(input: User) {
  return {
    type: LOGIN_SUCCESS,
    user: input
  }
}

export function logout() {
  return (dispatch: Dispatch, _: GetState) => {
    dispatch({
      type: LOG_OUT
    })
  }
}

export function signUp(userInfo: SignUpInput) {
  return async (dispatch: Dispatch) => {
    try {
      console.log(userInfo)
      const response = await Axios.post(`${API_URL}signup`, userInfo)

      const { name, email, token } = response.data
      const dataToSend = { name, email, token }
      dispatch(loginSucces(dataToSend))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function fetchUserFromToken() {
  return async (dispatch: Dispatch, getState: GetState) => {
    try {
      const response = await Axios.get(`${API_URL}me`, {
        headers: { Authorization: `Bearer ${getState().user.token}` }
      })

      dispatch(tokenStillValid(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

const tokenStillValid = (userWithoutToken: any) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken
})
