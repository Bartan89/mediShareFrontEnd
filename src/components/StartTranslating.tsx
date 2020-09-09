import { makeStyles, Modal } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { storeTranslation, saveTranslation } from "../store/mypost/actions"
import { selectTranslation } from "../store/myposts/selectors"
import { Post } from "../types-app-wide/postTypes"
import { selectSavingPost } from "../store/mypost/selectors"

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export default function StartTranslating(props: any) {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const dispatch = useDispatch()

  function handlePostInput(e: any) {
    dispatch(storeTranslation(e.target.value, props.id))
    // dispatch action < inside you look am I already sending?
    // Do on change...
    dispatch(saveTranslation())
  }

  function handlePostSave() {
    dispatch(saveTranslation())
  }

  const post = useSelector(selectTranslation(props.id))

  const saving = useSelector(selectSavingPost)

  return (
    <div>
      <button onClick={handleOpen}>Start translating</button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2>Translation:</h2>
          {saving ? "loading" : "_"}
          <div className="width-dynamic proba dva">
            <textarea readOnly={true} cols={40} rows={20} value={props.original} autoFocus />
            <textarea defaultValue={post?.translation || undefined} cols={40} rows={20} onChange={handlePostInput} autoFocus />
            <button onClick={handlePostSave}>save translation</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
