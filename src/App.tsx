import React, { useEffect } from "react"

import "./App.css"

import NavBar from "./components/NavBar/NavBar"
import { Route, Switch } from "react-router-dom"
import SignUp from "./components/NavBar/Signup"
import { useDispatch } from "react-redux"
import { fetchUserFromToken } from "./store/user/actions"
import PostDetail from "./components/post/PostDetail"
import Index from "./pages/Posts"
import Footer from "./components/Footer/Footer"
import myPosts from "./pages/my-posts"
import VisualSketch from "./pages/VisualSketch"

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
        <Route exact path="/my-posts" component={myPosts} />
        <Route exact path="/visual-sketcher" component={VisualSketch} />
      </Switch>

      <Footer />
    </div>
  )
}

export default App
