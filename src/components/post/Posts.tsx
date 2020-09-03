import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../store/post/action"
import { selectPosts } from "../../store/post/selectors"
import { Post } from "../../types-app-wide/postTypes"
import { prettyDOM } from "@testing-library/react"
import { BrowserRouter, Link } from "react-router-dom"
import SearchPost from "./SearchPost"
import { OnChange } from "../../types-app-wide/eventListeners"

export default function Posts() {
  const [searched, setSearched] = useState<any>([])

  const posts: Post[] = useSelector(selectPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const copy = [...posts]

  const sorted = copy.sort(function (a: Post, b: Post) {
    if (!a.id || !b.id) {
      return 0
    }
    return b.id - a.id
  })

  // function includes(element : Post, value: string){
  //   if (element.content.toLowerCase().includes(lowerValue)) {}

  // }

  function Search(e: OnChange) {
    const lowerValue = e.target.value.toLowerCase()
    const searched = sorted.filter((element) => {
      if (element.content.toLowerCase().includes(lowerValue)) {
        return element
      }
    })

    setSearched(searched)
  }

  const results = searched.length ? searched : sorted

  return (
    <div>
      <h4>Search your posts</h4>
      <div>
        <label htmlFor="">Search posts:</label>
        <input onChange={Search} type="text" />
      </div>
      <h4>All posts:</h4>
      {results.map((post: Post, i: number) => {
        return (
          <div key={i}>
            <p>{post.content}</p>
            <Link to={`post/${post.id}`}>Detail page</Link>
          </div>
        )
      })}
    </div>
  )
}
