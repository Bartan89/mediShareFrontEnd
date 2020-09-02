import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../store/user/actions"
import { Credentials } from "../../types-app-wide/userTypes"
import { OnClick } from "../../types-app-wide/eventListeners"
import { Link, NavLink } from "react-router-dom"

export default function Login() {
  const [userInfo, setUserInfo] = useState<Credentials>({
    email: "test@test.com",
    password: "test1234"
  })

  const dispatch = useDispatch()

  function SubmitForLogin(event: OnClick) {
    event.preventDefault()
    dispatch(login(userInfo))
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
        <label htmlFor="password">Password:</label>
        <input value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} type="password" />

        <button onClick={SubmitForLogin}>Login</button>

        <Link to="/signup">
          <button>or Signup</button>
        </Link>
      </form>
    </div>
  )
}
