import React, { useState } from "react"
import { Post, Status } from "../types-app-wide/postTypes"
import DisplayOnePost from "./DisplayOnePost"

type TypeProps = {
  ToFilter: Post[]
}

export default function FilterPosts(props: TypeProps) {
  const selectsForStatus: Status[] = [Status.draft, Status.awaitApproval, Status.disregarded, Status.published]

  const [selected, setSelected] = useState()

  function selectOption(e: any) {
    setSelected(e.target.value)
  }

  return (
    <div>
      <select onChange={selectOption}>
        {selectsForStatus.map((selector) => {
          return <option value={selector}>{selector}</option>
        })}
      </select>

      {props.ToFilter.map((post) => {
        return <DisplayOnePost content={post.content} status={post.status} id={post.id} />
      })}
    </div>
  )
}
