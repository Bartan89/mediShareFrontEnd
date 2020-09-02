import React, { useState } from "react"
import Login from "./Login"
import Logout from "./Logout"
import { selectToken } from "../../store/user/selectors"
import { useSelector } from "react-redux"

export default function NavBar() {
  const token = useSelector(selectToken)

  console.log("value of token?", token)

  return <div>{token === null ? <Login /> : <Logout />}</div>
}
