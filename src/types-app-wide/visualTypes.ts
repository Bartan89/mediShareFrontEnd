/////

export type MyVisual = {
  titles: Title[]
  background: Color & Image
  canvas: [number, number]
}

export type Color = {
  color: string
}

export type Image = {
  image?: string
}

export type Title = {
  id: number
  text: string
  xposition: number
  yposition: number
  scale: number
  rotation: number
  color: string
}
