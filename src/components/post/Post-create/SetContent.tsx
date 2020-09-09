import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { storeContentInput } from "../../../store/post/actions"
import { selectValueForContent } from "../../../store/post/selectors"
import { selectPostslength } from "../../../store/posts/selectors"
import "../style.css"
import SetStatus from "./SetStatus"
import SubmitPost from "./SubmitPost"

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export default function SetContent() {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const storeLengthFromSelector = useSelector(selectPostslength)
  const [storeLength, setStoreLength] = useState<number>(0)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const dispatch = useDispatch()

  function handlePostInput(e: any) {
    dispatch(storeContentInput(e.target.value))
  }

  useEffect(() => {
    setStoreLength(storeLengthFromSelector)
  }, [storeLengthFromSelector])

  if (storeLengthFromSelector - storeLength === 1) {
    setOpen(!open)
    setStoreLength(-1)
  }

  const value = useSelector(selectValueForContent) || ""

  return (
    <div>
      <div>
        {/* <Avatar /> */}
        <button className="text-like-button" type="button" onClick={handleOpen}>
          What do you like to post?
        </button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2>share your thoughts:</h2>
          <div className="width-dynamic proba dva">
            <textarea value={value} onChange={handlePostInput} autoFocus />
            <SubmitPost />
            <SetStatus />
          </div>
        </div>
      </Modal>
    </div>
  )
}
