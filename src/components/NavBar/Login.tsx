import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../store/user/actions"
import { Credentials } from "../../types/user"

export default function Login() {
  const [userInfo, setUserInfo] = useState<Credentials>({
    email: "test@test.com",
    password: "test1234"
  })

  const dispatch = useDispatch()

  function SubmitForLogin(event: any) {
    event.preventDefault()
    dispatch(login(userInfo))
  }

  return (
    <div>
      <form onSubmit={SubmitForLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
        <label htmlFor="password">Password:</label>
        <input value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} type="password" />

        <button>Login</button>
      </form>
    </div>
  )
}
