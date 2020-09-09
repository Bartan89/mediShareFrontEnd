import Axios from "axios"
import { Dispatch } from "redux"
import { API_URL } from "../../config/constants"
import { Post, Status } from "../../types-app-wide/postTypes"
import { GetState } from "../types"
import { DELETE_ONE_OF_MY_POST, STORE_A_COPY } from "./types"
import { SET_SPINNER } from "../mypost/types"

export function copyAndStoreApost(id: number | null) {
  return async (dispatch: Dispatch, getState: GetState) => {
    const foundPost: any = getState().posts.find((post) => post.id === id)

    console.log("data from found post", foundPost)
    const { content } = foundPost
    console.log("content", content)

    const JWT = getState().user.token

    try {
      const response = await Axios.post(
        `${API_URL}my-posts`,
        {
          status: Status.draft,
          content
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
    //dispatch(storeCopy(foundPost))
  }
}

function storeCopy(posts: Post[]) {
  return {
    type: STORE_A_COPY,
    posts
  }
}

export function fetchMyPosts() {
  return async (dispatch: Dispatch, getState: GetState) => {
    const JWT = getState().user.token

    console.log("I AM JWT", JWT)
    try {
      const response = await Axios.get(`${API_URL}my-posts`, {
        headers: {
          Authorization: `Bearer ${JWT}`
        }
      })

      console.log(response.data)
      dispatch(storeCopy(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export function DeleteOnePostinStore(id: any) {
  return async (dispatch: Dispatch, getState: GetState) => {
    const foundPost = getState().myposts.find((post) => post.id === id)
    const JWT = getState().user.token

    dispatch(deletePost(foundPost))

    if (id !== null) {
      const umber = id
      try {
        const response = await Axios.delete(`${API_URL}my-posts/${id}`, {
          headers: {
            Authorization: `Bearer ${JWT}`
          }
        })
        console.log(response)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}

function deletePost(post: Post | undefined) {
  return {
    type: DELETE_ONE_OF_MY_POST,
    post
  }
}
