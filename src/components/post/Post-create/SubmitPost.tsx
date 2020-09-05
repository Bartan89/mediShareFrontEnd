import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { postToDataBase } from "../../../store/posts/action"
import { selectIsPortContentEmpty, selectValueForContent } from "../../../store/post/selectors"

import Button from "@material-ui/core/Button"

export default function SubmitPost() {
  const emptyfield = useSelector(selectIsPortContentEmpty)

  console.log("this is the selector", emptyfield)

  const dispatch = useDispatch()

  function handlePostClick() {
    if (emptyfield) return

    dispatch(postToDataBase())
  }

  return (
    <div>
      <Button onClick={handlePostClick} disabled={emptyfield} variant="contained">
        {emptyfield ? "send" : "send!"}
      </Button>
    </div>
  )
}
