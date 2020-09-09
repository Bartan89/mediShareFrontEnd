import React from "react"
import { Post } from "../types-app-wide/postTypes"
import DeleteOnePost from "./DeleteOnePost"
import StartTranslating from "./StartTranslating"
import "./style.css"

export default function DisplayOnePost(props: Post) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="scrollable">
          <p className="card-text">{props.content}</p>
        </div>
      </div>

      <p>{props.status}</p>
      <DeleteOnePost id={props.id} />
      <StartTranslating id={props.id} original={props.content} />
    </div>
  )
}
