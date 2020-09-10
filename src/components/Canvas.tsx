import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { background } from "../store/myvisual/selector"

type Props = {
  children: any
}

export default function Canvas(props: Props) {
  //const test = document.querySelector("#test")

  const bg = useSelector(background)

  return (
    <div>
      <div style={{ backgroundColor: `${bg}`, position: "relative", width: "400px", height: "400px", margin: "auto" }}>
        <img style={{ position: "relative" }} src="https://picsum.photos/400/400" alt="" />
        {props.children}
      </div>
    </div>
  )
}
