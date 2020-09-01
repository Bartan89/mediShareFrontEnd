import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../store/user/actions"

export default function Login() {
  const [mail, setEmail] = useState<string | undefined>("test@test.com")
  const [password, setPassword] = useState<string | undefined>("test1234")

  const dispatch = useDispatch()

  function SubmitForLogin(event: any) {
    event.preventDefault()
    console.log(mail)
    dispatch(login(mail, password))
  }

  return (
    <div>
      <form onSubmit={SubmitForLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" value={mail} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

        <button>Login</button>
      </form>
    </div>
  )
}
