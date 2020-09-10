import React from "react"
import { Title } from "../types-app-wide/visualTypes"

export default function TitleElement({ scale, text, xposition, yposition, rotation, color }: Title) {
  return (
    <div>
      <h1 style={{ color: `${color}`, transform: `rotate(-${rotation}deg)`, fontSize: `${scale}px`, position: "fixed", left: `${yposition}px`, top: `${xposition}px` }}>{text}</h1>
    </div>
  )
}
