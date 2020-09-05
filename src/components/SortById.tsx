import React from "react"
import { Post } from "../types-app-wide/postTypes"
import { selectPosts } from "../store/posts/selectors"
import ShowPosts from "./ShowPosts"
import { useSelector } from "react-redux"

export default function SortById() {
  const posts: Post[] = useSelector(selectPosts)

  const sorted = posts.sort(function (a: Post, b: Post) {
    if (!a.id || !b.id) {
      return 0
    }
    return b.id - a.id
  })

  return (
    <div>
      <ShowPosts array={sorted} />
    </div>
  )
}
