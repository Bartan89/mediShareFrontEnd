import React, { useEffect } from "react"

import "./App.css"

import NavBar from "./components/NavBar"
import { Route, Switch } from "react-router-dom"
import SignUp from "./components/NavBar/Signup"
import { useDispatch } from "react-redux"
import { fetchUserFromToken } from "./store/user/actions"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("test")
    dispatch(fetchUserFromToken)
  }, [])

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  )
}

export default App
