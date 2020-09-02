import React, { useState } from "react"
import { OnSubmit, OnChange } from "../../types-app-wide/eventListeners"
import { SignUpInput } from "../../types-app-wide/userTypes"
import { useDispatch } from "react-redux"
import { signUp } from "../../store/user/actions"
import { useHistory } from "react-router-dom"

export default function SignUp() {
  const history = useHistory()
  const dispatch = useDispatch()
  const random = Math.floor(Math.random() * 10000) + 1

  const [userInfo, setUserInfo] = useState<SignUpInput>({
    name: "Bart" + random,
    email: `Bart${random}@test.com`,
    password: "123"
  })

  function SubmitForSignUp(event: OnSubmit) {
    event.preventDefault()
    dispatch(signUp(userInfo))

    //change later to assure unhappy path also works
    history.push("/")
  }

  return (
    <div>
      <h1>Sign up here:</h1>

      <form onSubmit={SubmitForSignUp} action="">
        <label htmlFor="name">Name:</label>
        <input value={userInfo.name} onChange={(e: OnChange) => setUserInfo({ ...userInfo, name: e.target.value })} type="text" />
        <label htmlFor="name">Email:</label>
        <input value={userInfo.email} onChange={(e: OnChange) => setUserInfo({ ...userInfo, email: e.target.value })} type="Email" />
        <label htmlFor="name">Password:</label>
        <input value={userInfo.password} onChange={(e: OnChange) => setUserInfo({ ...userInfo, password: e.target.value })} type="Password" />
        <button>Signup</button>
      </form>
    </div>
  )
}
