import React, { useEffect, useState } from "react"
import { Post } from "../../types-app-wide/postTypes"
import { OnClick, OnInput, OnChange } from "../../types-app-wide/eventListeners"
import { useDispatch } from "react-redux"
import { postAPost } from "../../store/post/action"

export default function PostC() {
  const dispatch = useDispatch()
  const [post, setPost] = useState<Post>({
    title: "change later",
    content: "something meaningful...",
    id: 0
  })

  const handlePost = (e: OnClick) => {
    e.preventDefault()
    dispatch(postAPost(post))
  }

  return (
    <div>
      <form action="">
        <div>
          <textarea placeholder={post.content} cols={20} rows={5} onInput={(e: OnInput) => setPost({ ...post, content: e.target.value })} />
        </div>
        <button onClick={handlePost}>Create a post</button>
      </form>
    </div>
  )
}
