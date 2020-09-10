import { combineReducers } from "redux"
//import appState from "./appState/reducer"
import user from "./user/reducer"
import posts from "./posts/reducer"
import post from "./post/reducer"
import myposts from "./myposts/reducer"
import mypost from "./mypost/reducer"
import myvisual from "./myvisual/reducer"

export default combineReducers({
  //appState,
  user,
  post,
  posts,
  myposts,
  mypost,
  myvisual
})
