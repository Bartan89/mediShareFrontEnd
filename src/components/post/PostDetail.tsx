import React from "react"
import { useParams } from "react-router-dom"

export default function PostDetail() {
  const params: any = useParams()

  console.log(params.id)

  return <h1>hello from postdetail</h1>
}
