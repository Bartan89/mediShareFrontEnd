import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/user/actions"
import { selectName } from "../../store/user/selectors"

export default function Login() {
  const name = useSelector(selectName)
  const dispatch = useDispatch()

  function submitForLogout() {
    dispatch(logout())
  }

  return (
    <div>
      <span>
        Welcome, <b>{name}</b>{" "}
      </span>
      <button onClick={submitForLogout}>logout</button>
    </div>
  )
}
