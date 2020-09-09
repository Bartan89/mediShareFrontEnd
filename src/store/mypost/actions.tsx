import { Dispatch } from "redux"
import { STORE_TRANSLATION, SET_SPINNER } from "./types"
import { GetState } from "../types"
import { ADD_TRANSLATION_TO_MY_POST } from "../myposts/types"
import { Translation, Status } from "../../types-app-wide/postTypes"
import Axios from "axios"
import { API_URL } from "../../config/constants"

export function storeTranslation(content: string, id: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    const translation = { id, content }

    dispatch(dispatchTranslationsToStore(translation))
  }
}

function dispatchTranslationsToStore(translation: Translation) {
  return {
    type: STORE_TRANSLATION,
    translation
  }
}

export function saveTranslation() {
  return async (dispatch: Dispatch, getState: GetState) => {
    const translation = getState().mypost
    console.log("this is the state", translation)
    dispatch(addTranslationToMyPost(translation))

    const id = getState().mypost.id
    console.log(id)
    console.log(translation.content)
    const JWT = getState().user.token

    dispatch({ type: SET_SPINNER })
    if (getState().mypost.loading === true) {
      try {
        const response = await Axios.put(
          `${API_URL}my-posts/${id}`,
          {
            translation: translation.content
          },
          {
            headers: {
              Authorization: `Bearer ${JWT}`
            }
          }
        )
        console.log(response)
      } catch (error) {
        console.log(error.message)
      }
    }
    dispatch({ type: SET_SPINNER })
  }
}

function addTranslationToMyPost(translation: Translation) {
  return {
    type: ADD_TRANSLATION_TO_MY_POST,
    translation
  }
}

// export function saveOnTimer(id: number) {
//   return async (dispatch: Dispatch, getState: GetState) => {
//     const translation = getState().mypost
//     if (translation.content !== undefined && translation.content !== null) {
//       if (translation.content.length > 3) {
//         setTimeout(() => {
//           dispatch(addTranslationToMyPost(translation))
//         }, 2)

//         const post = getState().myposts.find((post) => {
//           return post.id === id
//         })

//         const JWT = getState().user.token

//         if (post?.translation !== getState().mypost.content) {

//         // console.log(post?.translation)
//         // console.log(getState().mypost.content)
//       }
//     }
//   }
// }
