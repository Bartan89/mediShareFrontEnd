import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../../store/user/actions"

export default function Login() {
  const dispatch = useDispatch()

  function submitForLogout() {
    dispatch(logout())
  }

  return (
    <div>
      <button onClick={submitForLogout}>logout</button>
    </div>
  )
}
