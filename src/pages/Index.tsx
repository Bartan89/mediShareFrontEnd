import React, { useEffect } from "react"
import Post from "../components/post/Post-create"
import Posts from "../components/post/Posts"

export default function Index() {
  useEffect(() => {
    console.log("hello from use effect posts")
  }, [])

  return (
    <div>
      <h4>Make a new post:</h4>
      <Post />
      <Posts />
    </div>
  )
}
