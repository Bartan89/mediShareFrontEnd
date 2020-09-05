import React, { useEffect } from "react"

import "./App.css"

import NavBar from "./components/NavBar/NavBar"
import { Route, Switch } from "react-router-dom"
import SignUp from "./components/NavBar/Signup"
import { useDispatch } from "react-redux"
import { fetchUserFromToken } from "./store/user/actions"
import PostDetail from "./components/post/PostDetail"
import Index from "./pages/Index"
import Footer from "./components/Footer/Footer"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserFromToken())
  }, [dispatch])

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route exact path="/post/:id" component={PostDetail} />
        <Route exact path="/" component={Index} />
      </Switch>

      <Footer />
    </div>
  )
}

export default App
