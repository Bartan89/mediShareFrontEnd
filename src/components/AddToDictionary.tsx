import React from "react"
import { OnClick, OnSubmit, OnChange } from "../types-app-wide/eventListeners"

export default function AddToDictionary() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log(e.target)
  }

  function handleInput(e: OnChange) {
    console.log(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleInput} type="text" />
        <button type="submit">click me</button>
      </form>
    </div>
  )
}
