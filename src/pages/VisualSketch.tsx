import React, { useRef, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Canvas from "../components/Canvas"
import gloves from "../pictures/glove.jpg"

import SetBackgroundColor from "../components/SetBackgroundColor"
import TitleControl from "../components/TitleControl"
import TitleElement from "../components/TitleElement"
import { selectTitle, background } from "../store/myvisual/selector"
import "./style.css"
import { storeNewTitleRequest } from "../store/myvisual/actions"
import { OnChange } from "../types-app-wide/eventListeners"

export default function VisualSketch() {
  const titles = useSelector(selectTitle)
  const bg = useSelector(background)

  const dispatch = useDispatch()
  function handleNewTitleComp() {
    dispatch(storeNewTitleRequest())
  }

  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [picture, setPicture] = useState(false)

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        context.beginPath()
        context.fillStyle = bg
        context.fillRect(0, 0, 400, 400)
        if (picture) {
          const background = new Image()
          background.src = gloves
          context.drawImage(background, 0, 0)
        }
        context.closePath()
      }
    }
  }, [titles, bg, picture])

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        titles.map((title) => {
          context.beginPath()
          context.font = `${title.scale}px Arial`
          context.fillStyle = `${title.color}`
          context.fillText(title.text, title.xposition, title.yposition)
          context.closePath()
        })
      }
    }
  }, [titles, bg, picture])

  const image = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    if (canvasRef.current && image.current) {
      const context = canvasRef.current.getContext("2d")
      if (context) {
        const dataURI = context?.canvas.toDataURL("")
        image.current.href = dataURI
      }
    }
  }, [titles, bg, picture])

  function togglePicture() {
    setPicture(!picture)
  }

  return (
    <div>
      <button onClick={togglePicture}>temp toggle picture</button>

      <h2>Make a new sketch</h2>
      <div style={{ margin: "20px", display: "flex" }}>
        <div>
          <SetBackgroundColor />
          {titles.map((title) => {
            return <TitleControl id={title.id} />
          })}
          <button onClick={handleNewTitleComp}>new text input</button>
        </div>
        {/* <Canvas>
          {titles.map((title, i) => {
            return <TitleElement key={title.id} rotation={title.rotation} color={title.color} id={title.id} scale={title.scale} text={title.text} xposition={title.xposition} yposition={title.yposition} />
          })}
        </Canvas> */}
        <div style={{ height: "400px" }}>
          <canvas width="400px" height="400px" ref={canvasRef}></canvas>
        </div>
      </div>
      <a download ref={image} href="dataURI">
        <button>Download it</button>
      </a>
    </div>
  )
}
