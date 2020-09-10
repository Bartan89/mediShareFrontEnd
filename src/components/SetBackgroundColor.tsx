import React from "react"
import { useDispatch } from "react-redux"
import { storeBgColor } from "../store/myvisual/actions"

export default function SetBackgroundColor() {
  const dispatch = useDispatch()

  function changeBgColor(e: React.FocusEvent<HTMLInputElement>) {
    dispatch(storeBgColor(e.target.value))
  }

  return (
    <div style={{ backgroundColor: "#2E3C55", width: "200px", color: "white" }}>
      <div>
        <h3>Background color</h3>
        <input onBlur={changeBgColor} type="color" />
      </div>
    </div>
  )
}
