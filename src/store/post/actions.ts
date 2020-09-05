import { Dispatch } from "redux"
import { ADD_CONTENT, ADD_STATUS } from "./types"

function dispatchStatus(status: string) {
  return {
    type: ADD_STATUS,
    status
  }
}

function dispatchContent(content: string) {
  return {
    type: ADD_CONTENT,
    content
  }
}

export function storeContentInput(content: string) {
  return (dispatch: Dispatch) => {
    dispatch(dispatchContent(content))
  }
}

export function storeStatusInput(status: string) {
  return (dispatch: Dispatch) => {
    dispatch(dispatchStatus(status))
  }
}
