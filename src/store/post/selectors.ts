import { StoreState } from "../types"

export const selectIsPortContentEmpty = (state: StoreState) => state.post.content === null || state.post.content === ""

export const selectValueForContent = (state: StoreState) => state.post.content
