import React from "react"
import { Post } from "../types-app-wide/postTypes"
import { useDispatch } from "react-redux"
import { DeleteOnePostinStore } from "../store/myposts/actions"

type TypeProps = {
  id: number | null
}

export default function DeleteOnePost(props: TypeProps) {
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(DeleteOnePostinStore(props.id))
  }

  return (
    <div>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  )
}
