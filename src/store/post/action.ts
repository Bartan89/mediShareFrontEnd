import Axios from "axios"
import { API_URL } from "../../config/constants"
import { Post } from "../../types-app-wide/postTypes"
import { FETCH_POSTS, ADD_ONE_POST } from "./types"
import { Dispatch } from "redux"
import { GetState } from "../types"

export function postAPost(post: Post) {
  return async (dispatch: Dispatch, getState: GetState) => {
    if (getState().post.posts.length > 0) {
      const curid = getState().post.posts[getState().post.posts.length - 1].id

      const copy = { ...post, id: curid + 1 }
      dispatch(addOnePost(copy))

      const { id, ...Payload } = copy
      const response = await Axios.post(`${API_URL}posts`, Payload)
      console.log(response)
    } else {
      const copy = { ...post }
      const { id, ...Payload } = copy
      const response = await Axios.post(`${API_URL}posts`, Payload)
      console.log(response)

      dispatch(addOnePost(response.data))
    }
  }
}

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

function addOnePost(post: Post) {
  return {
    type: ADD_ONE_POST,
    post
  }
}
