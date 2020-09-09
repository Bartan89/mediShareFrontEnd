import { Translation } from "../../types-app-wide/postTypes"

export const STORE_TRANSLATION = "STORE_TRANSLATION"
export const SET_SPINNER = "SET_SPINNER"

type StoreTranslation = {
  type: typeof STORE_TRANSLATION
  translation: Translation
}

type ToggleSpinner = {
  type: typeof SET_SPINNER
}

export type myPostActionTypes = StoreTranslation | ToggleSpinner
