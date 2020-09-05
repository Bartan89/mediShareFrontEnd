import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import { deepOrange, deepPurple } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      height: 25,
      width: 25,
      fontSize: 15
    }
  }
}))

export default function LetterAvatars() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar>BK</Avatar>
    </div>
  )
}
