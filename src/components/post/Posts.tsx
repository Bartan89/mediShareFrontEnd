import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../store/posts/action"
import { selectPosts } from "../../store/posts/selectors"
import { Post, Status } from "../../types-app-wide/postTypes"
import { Link } from "react-router-dom"
import { OnChange } from "../../types-app-wide/eventListeners"
import "./style.css"
import SearchPost from "./SearchPost"
import ShowPosts from "../ShowPosts"
import SortById from "../SortById"
import SortByStatus from "../SortByStatus"

export default function Posts() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const selectsOthers = ["id"]
  const selectsForStatus: Status[] = ["Draft", "Await approval", "Disregarded", "Published"]

  const combineSelector = [...selectsOthers, ...selectsForStatus]

  const [selected, setSelected] = useState(selectsOthers[0])

  function selectOption(e: any) {
    setSelected(e.target.value)
  }

  return (
    <div>
      <h4>Search your posts</h4>
      <h4>All posts:</h4>
      <label htmlFor="cars">Filter by:</label>

      <select onChange={selectOption} name="cars" id="cars">
        {combineSelector.map((selector) => {
          return <option value={selector}>{selector}</option>
        })}
      </select>
      <SortByStatus status={selected} />
    </div>
  )
}

//</div>const value = post.content || ""
