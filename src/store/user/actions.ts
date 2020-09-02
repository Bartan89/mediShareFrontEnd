//import { Dispatch } from "redux" ---> npm i @types/redux
//import { GetState } from "../" // You define GetState just like you define any other object, you just have to make sure it has exactly the same structure as your store

import Axios from "axios"
import { UserInfo } from "../../types/user"

const API_URL = "http://localhost:4000/"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOG_OUT = "LOG_OUT"

export function login(userInfo: UserInfo) {
  return async (dispatch: any, getState: any) => {
    try {
      console.log(userInfo)
      const response = await Axios.post(`${API_URL}login`, userInfo)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      })
      console.log(response)

      console.log("I work")
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function logout() {
  return (dispatch: any, getState: any) => {
    console.log("hello")
    dispatch({
      type: LOG_OUT
    })
  }
}
