import { StoreState } from "../types"

export const selectToken = (state: StoreState) => state.user.token

export const selectName = (state: StoreState) => state.user.name
