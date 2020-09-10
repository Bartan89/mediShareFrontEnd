export const STORE_BG_COLOR = "STORE_BG_COLOR"
export const STORE_YPOSTIION = "STORE_YPOSTIION"
export const ADD_ONE_TITLE = "ADD_ONE_TITLE"
export const DELETE_TITLE_BY_ID = "DELETE_TITLE_BY_ID"

type StoreBgColor = {
  type: typeof STORE_BG_COLOR
  color: string
}

type StoreYPosition = {
  type: typeof STORE_YPOSTIION
  id: number
  yposition: {}
}

type AddOneTitles = {
  type: typeof ADD_ONE_TITLE
  id: number
}

type DeleteTitleById = {
  type: typeof DELETE_TITLE_BY_ID
  id: number
}

export type MyVisualActionTypes = StoreBgColor | StoreYPosition | AddOneTitles | DeleteTitleById
