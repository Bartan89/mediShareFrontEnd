import React from "react"
import Login from "./Login"
import Logout from "./Logout"
import { selectToken } from "../../store/user/selectors"
import { useSelector } from "react-redux"
import "./style.css"
import SearchPost from "../post/SearchPost"

export default function NavBar() {
  const token = useSelector(selectToken)

  return (
    <div className="Navbar">
      <span>home </span>
      <span>My posts </span>
      {token === null ? <Login /> : <Logout />}

      <SearchPost />
    </div>
  )
}
