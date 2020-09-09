import { StoreState } from "../types"

export const selectSavingPost = (state: StoreState) => state.mypost.loading
