import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { storeAnyChange, storeDeleteTitleRequest } from "../store/myvisual/actions"
import { OnChange } from "../types-app-wide/eventListeners"
import TextInput from "./TextInput"
import { StaticRouter } from "react-router-dom"

type Props = {
  id: number
}

export default function TitleControl(props: Props) {
  const initialState = [
    { name: "text", id: "text", type: "text" },
    { name: "y-position", id: "yposition", type: "range", min: -80, max: 280 },
    { name: "x-position", id: "xposition", type: "range", min: -80, max: 280 },
    { hide: true, name: "scale", id: "scale", type: "range" },
    { hide: true, name: "color", id: "color", type: "color" },
    { hide: true, name: "rotation", id: "rotation", type: "range", min: 0, max: 360 }
  ]

  const [state, setstate] = useState<any>(initialState)

  const dispatch = useDispatch()

  function handleDeleteTitleComp() {
    dispatch(storeDeleteTitleRequest(props.id))
  }

  function expand() {
    setstate(
      state.map((element: any) => {
        if (element.hide === false || element.hide === true) {
          return { ...element, hide: !element.hide }
        } else {
          return element
        }
      })
    )
    console.log("this is state:", state[3].expand)
  }

  const [chosenEmoji, setChosenEmoji] = useState(null)

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject)
  }

  return (
    <div style={{ display: "flex", backgroundColor: "lightblue", width: "200px" }}>
      <div style={{ flex: "row" }}>
        <h3>Text input</h3>
        <button onClick={handleDeleteTitleComp}>[x]</button>
        {state.map((inputs: any) => {
          return <TextInput id={props.id} inputId={inputs.id} type={inputs.type} min={inputs.min} max={inputs.max} name={inputs.name} hide={inputs.hide} />
        })}

        <button onClick={expand}>expand</button>
      </div>
    </div>
  )
}
