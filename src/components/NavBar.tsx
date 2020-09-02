import React from "react"
import Login from "./NavBar/Login"
import Logout from "./NavBar/Logout"
import Signup from "./NavBar/Signup"
import { selectToken, selectName } from "../store/user/selectors"
import { useSelector } from "react-redux"
import "./NavBar/style.css"

export default function NavBar() {
  const token = useSelector(selectToken)

  console.log("value of token?", token)

  return (
    <div className="Navbar">
      <span>home </span>
      {token === null ? <Login /> : <Logout />}
    </div>
  )
}
