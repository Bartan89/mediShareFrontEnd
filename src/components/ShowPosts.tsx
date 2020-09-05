import React, { useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Post } from "../types-app-wide/postTypes"
import { selectPosts } from "../store/posts/selectors"

import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import FileCopyIcon from "@material-ui/icons/FileCopy"
import { AnyAaaaRecord } from "dns"
import { copyAndStoreApost } from "../store/myposts/actions"

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
