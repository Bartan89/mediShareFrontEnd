import React, { useRef, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Canvas from "../components/Canvas"

import SetBackgroundColor from "../components/SetBackgroundColor"
import TitleControl from "../components/TitleControl"
import TitleElement from "../components/TitleElement"
import { selectTitle } from "../store/myvisual/selector"
import "./style.css"
import { storeNewTitleRequest } from "../store/myvisual/actions"
import { OnChange } from "../types-app-wide/eventListeners"

export default function VisualSketch() {
  const titles = useSelector(selectTitle)

  const dispatch = useDispatch()
  function handleNewTitleComp() {
    dispatch(storeNewTitleRequest())
  }

  const [moveY, setMoveY] = useState<number>(20)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        context.clearRect(0, 0, 400, 400)
        titles.map((title) => {
          context.font = `${title.scale}px Arial`
          context.fillStyle = `${title.color}`
          context.fillText(title.text, title.xposition, title.yposition)
        })
      }
    }
  }, [titles])

  function slider(e: OnChange) {
    setMoveY(parseInt(e.target.value) * 40)
  }

  return (
    <div>
      <input onChange={slider} type="range" />
      <h2>Make a new sketch</h2>
      <div style={{ margin: "20px", display: "flex" }}>
        <div>
          <SetBackgroundColor />
          {titles.map((title) => {
            return <TitleControl id={title.id} />
          })}
          <button onClick={handleNewTitleComp}>new text input</button>
        </div>
        <Canvas>
          {titles.map((title, i) => {
            return <TitleElement key={title.id} rotation={title.rotation} color={title.color} id={title.id} scale={title.scale} text={title.text} xposition={title.xposition} yposition={title.yposition} />
          })}
        </Canvas>
        <canvas style={{ backgroundColor: "black" }} width="400px" height="400px" ref={canvasRef}></canvas>
      </div>
    </div>
  )
}
