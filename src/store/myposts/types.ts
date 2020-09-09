import { Post, Translation } from "../../types-app-wide/postTypes"

export const STORE_A_COPY = "STORE_A_COPY"
export const DELETE_ONE_OF_MY_POST = "DELETE_ONE_OF_MY_POST"
export const ADD_TRANSLATION_TO_MY_POST = "ADD_TRANSLATION_TO_MY_POST"

type storeACopy = {
  type: typeof STORE_A_COPY
  posts: Post[]
}

type DeleteOnOfMyPost = {
  type: typeof DELETE_ONE_OF_MY_POST
  post: Post
}

type AddTranslationToMyPost = {
  type: typeof ADD_TRANSLATION_TO_MY_POST
  translation: Translation
}

export type myPostsActionTypes = storeACopy | DeleteOnOfMyPost | AddTranslationToMyPost
