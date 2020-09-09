import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { copyAndStoreApost } from "../store/myposts/actions"
import { selectPosts } from "../store/posts/selectors"
import { Post, Media } from "../types-app-wide/postTypes"
import { Avatar } from "material-ui"
import SocialMediumIcon from "./SocialMediumIcon"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch"
    }
  },
  button: {
    margin: theme.spacing(0.5)
  }
}))

export default function ShowPosts(props: any) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const posts: Post[] = useSelector(selectPosts)

  const iteratover = props.array === false ? posts : props.array

  const [copied, setToCopied] = useState<any>({
    theones: []
  })

  function handleCopy(id: number | null) {
    dispatch(copyAndStoreApost(id))
    setToCopied({ ...copied, theones: [...copied.theones, id] })
  }

  return (
    <div>
      <div>
        {iteratover.map((post: Post) => {
          const value = post.content || ""
          return (
            <div>
              <TextField inputProps={{ readOnly: true }} value={post.content} id="outlined-multiline-static" label={`status: ${post.status}`} multiline rows={10} variant="outlined" />
              <SocialMediumIcon medium="LinkedInIcon" />
              <div>
                <Button variant="contained" disabled={copied.theones.includes(post.id) ? true : false} onClick={() => handleCopy(post.id)} size="small" className={classes.button} startIcon={<FileCopyIcon />}>
                  {copied.theones.includes(post.id) ? <small>coppied</small> : <small>copy</small>}
                </Button>
              </div>
               {/* <button className="deleteButton">X</button> */}
              {/* <Link className="button" to={`/post/${post.id}`}>
                Detail page
              </Link> */}
            </div>
          )
        })}
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <div></div>
      </form>
    </div>
  )
}

// setsearchQuery(e.target.value)
// const searched = sorted.filter((element) => {
//   if (element.content?.toLowerCase().includes(lowerValue)) {
//     return element
//   }
