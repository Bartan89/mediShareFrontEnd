import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import FilterPosts from "../components/DisplayPosts"
import { selectAllMyPost } from "../store/myposts/selectors"
import { fetchMyPosts } from "../store/myposts/actions"

export default function Posts() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMyPosts())
  }, [dispatch])

  const allMyPosts = useSelector(selectAllMyPost)
  return (
    <div>
      <FilterPosts ToFilter={allMyPosts} />
    </div>
  )
}
