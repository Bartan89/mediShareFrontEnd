import React, { useState } from "react"
import { OnChange } from "../../types-app-wide/eventListeners"
import { useSelector } from "react-redux"
import { selectPosts } from "../../store/posts/selectors"
import { Post } from "../../types-app-wide/postTypes"
import ShowPosts from "../ShowPosts"

export default function SearchPost() {
  const [searched, setSearch] = useState<any>([])
  const [query, setQuery] = useState("")

  const posts: Post[] = useSelector(selectPosts)

  function handleSearch(e: OnChange) {
    setQuery(e.target.value)

    if (query.length < 2) {
      setSearch([])
    } else {
      const lowerValue = e.target.value.toLowerCase()

      const searched = posts.filter((post) => {
        if (post.content?.toLowerCase().includes(lowerValue)) {
          return post
        }
      })
      setSearch(searched)
    }
  }
  console.log(searched)
  console.log(query.length)

  function clearSearch() {
    setSearch([])
  }

  return (
    <div>
      <label htmlFor="">Search posts:</label>
      <input value={query} onBlur={clearSearch} onChange={handleSearch} type="text" />
      {searched.map((post: Post) => {
        return <ShowPosts array={searched} />
      })}
    </div>
  )
}
