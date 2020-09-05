import React from "react"
import { Post, Status } from "../types-app-wide/postTypes"
import { selectPosts } from "../store/posts/selectors"
import ShowPosts from "./ShowPosts"
import { useSelector } from "react-redux"
import SortById from "./SortById"

export default function SortByStatus(props: any) {
  const posts: Post[] = useSelector(selectPosts)

  const filter = props.status
  const sorted = posts.filter((post) => {
    return post.status === filter
  })

  return (
    <div>
      <p>...</p>
      {filter != "id" ? <ShowPosts array={sorted} /> : <SortById />}
    </div>
  )
}
