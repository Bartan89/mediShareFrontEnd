import Axios from "axios"
import { API_URL } from "../../config/constants"
import { Post } from "../../types-app-wide/postTypes"
import { FETCH_POSTS, ADD_A_POST } from "./types"
import { Dispatch } from "redux"
import { GetState } from "../types"

function dispatchAPost(post: Post) {
  return {
    type: ADD_A_POST,
    post
  }
}

export function postToDataBase() {
  return async (dispatch: Dispatch, getState: GetState) => {
    const highestIDinStore = getState().posts.reduce((highest: number, post: Post) => {
      if (!post.id) return 0

      const higher = post.id > highest
      if (higher) return post.id
      return highest
    }, 0)

    const dispatchSend = { ...getState().post, id: highestIDinStore + 1 }

    dispatch(dispatchAPost(dispatchSend))

    const { status, content } = getState().post

    try {
      const response = await Axios.post(`${API_URL}posts`, {
        status: status,
        content: content
      })

      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }
}

//the button takes the date from the store
// getState() <---

//the form dispatches to the store
// onChange **Also take away useState

// export function storePostInput(input: string) {
//   return (dispatch: Dispatch) => {
//     dispatch(addToPost(input))
//   }
// }

// export function postAPost(post: Post) {
//   return async (dispatch: Dispatch, getState: GetState) => {
//     const { posts } = getState().post
//     const postLength = posts.length

//     if (postLength > 0) {
// const highestId = posts.reduce((highest: number, post: Post) => {
//   const higher = post.id > highest

//   if (higher) return post.id
//   return highest
// }, 0)

//       const copy = { ...post, id: highestId + 1 }
//       dispatch(addOnePost(copy))

//       const { id, ...Payload } = copy
//       const response = await Axios.post(`${API_URL}posts`, Payload)
//       console.log(response)
//     } else {
//       const copy = { ...post }
//       const { id, ...Payload } = copy
//       const response = await Axios.post(`${API_URL}posts`, Payload)
//       console.log(response)

//       dispatch(addOnePost(response.data))
//     }
//   }
// }

export function fetchPosts() {
  return async (dispatch: Dispatch) => {
    const response = await Axios.get(`${API_URL}posts`)

    console.log(response.data)
    dispatch(dispatchPosts(response.data))
  }
}

function dispatchPosts(posts: Post[]) {
  return {
    type: FETCH_POSTS,
    posts
  }
}

// function addToPost(input: any) {
//   return {
//     type: ADD_ONE_POST,
//     input
//   }
// }
