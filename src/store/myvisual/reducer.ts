import { MyVisual, Title } from "../../types-app-wide/visualTypes"
import { MyVisualActionTypes, STORE_BG_COLOR, STORE_YPOSTIION, ADD_ONE_TITLE, DELETE_TITLE_BY_ID } from "./types"

const initialState: MyVisual = {
  titles: [],
  background: {
    color: "#AED8E6"
  },
  canvas: [200, 200]
}

export default (state = initialState, action: MyVisualActionTypes) => {
  switch (action.type) {
    case STORE_BG_COLOR:
      return { ...state, background: { ...state.background, color: action.color } }

    case STORE_YPOSTIION:
      const yposition = action.yposition
      const changedTitles = state.titles.map((title) => {
        if (title.id === action.id) {
          return { ...title, ...yposition }
        } else {
          return { ...title }
        }
      })
      return {
        ...state,
        titles: [...changedTitles]
      }

    case ADD_ONE_TITLE:
      const randx = 10
      const randy = 20

      const newInput: Title = { id: action.id, scale: 30, text: "New title", xposition: randx, yposition: randy, rotation: 0, color: "35373a" }

      return { ...state, titles: [...state.titles, { ...newInput }] }

    case DELETE_TITLE_BY_ID:
      return {
        ...state,
        titles: [
          ...state.titles.filter((title) => {
            if (title.id === action.id) {
              return
            } else {
              return { ...title }
            }
          })
        ]
      }

    default:
      return state
  }
}
