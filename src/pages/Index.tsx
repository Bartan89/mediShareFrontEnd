import React from "react"
import Post from "../components/post/Post-create/Post-create"
import Posts from "../components/post/Posts"

export default function Index() {
  return (
    <div>
      <h2>Make a new post:</h2>
      <Post />
      <Posts />
    </div>
  )
}
