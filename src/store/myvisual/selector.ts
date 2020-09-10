import { StoreState } from "../types"

export const background = (state: StoreState) => state.myvisual.background.color

export const selectTitle = (state: StoreState) => state.myvisual.titles
