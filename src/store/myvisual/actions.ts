import { Dispatch } from "redux"
import { GetState } from "../types"
import { ADD_ONE_TITLE, STORE_BG_COLOR, STORE_YPOSTIION, DELETE_TITLE_BY_ID } from "./types"

export const storeBgColor = (color: string) => (dispatch: Dispatch) => {
  console.log(color)
  dispatch(dispatchStoreBgColor(color))
}

const dispatchStoreBgColor = (color: string) => {
  return {
    type: STORE_BG_COLOR,
    color
  }
}

export const storeAnyChange = (yposition: {}, id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: STORE_YPOSTIION,
    yposition,
    id
  })
}

export function storeNewTitleRequest() {
  return (dispatch: Dispatch, getState: GetState) => {
    const titles = getState().myvisual.titles

    const highestID = titles.reduce((accumulator: any, title) => {
      if (title.id > accumulator) {
        return title.id
      }
      return accumulator
    }, 0)
    const id = highestID + 1

    dispatch({
      type: ADD_ONE_TITLE,
      id
    })
  }
}

export function storeDeleteTitleRequest(id: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_TITLE_BY_ID,
      id
    })
  }
}

// reduce((highest: number, title) => {
//   if (!title.id) return 0

//   const higher = title.id > highest
//   if (higher) return title.id
//   return highest
// }, 0)
