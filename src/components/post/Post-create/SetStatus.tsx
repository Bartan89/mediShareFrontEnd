import React from "react"

import { Status } from "../../../types-app-wide/postTypes"
import { useDispatch } from "react-redux"
import { storeStatusInput } from "../../../store/post/actions"

import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { makeStyles } from "@material-ui/core/styles"

export default function SetStatus() {
  const dispatch = useDispatch()

  function handleStatus(e: any) {
    dispatch(storeStatusInput(e.target.value))
  }

  const Statusses: Status[] = [Status.draft, Status.awaitApproval, Status.disregarded, Status.published]

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }))

  const classes = useStyles()
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">set status:</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleStatus}>
          {Statusses.map((status, i) => {
            return <MenuItem value={status}>{status}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  )
}
