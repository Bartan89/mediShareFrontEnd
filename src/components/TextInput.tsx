import React from "react"
import { storeAnyChange } from "../store/myvisual/actions"
import { useDispatch } from "react-redux"

type Props = {
  id: number
  inputId: string
  type: string
  min: number | undefined
  max: number | undefined
  name: string | undefined
  hide: boolean | undefined
}

export default function TextInput({ inputId, type, id, min, max, name, hide }: Props) {
  const dispatch = useDispatch()

  function handleAnyChange(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(parseInt(e.target.value))
    const key = e.target.id
    const value = e.target.value
    const obj = { [key]: value }

    dispatch(storeAnyChange(obj, id))
  }

  if (hide) return <></>

  return (
    <div>
      <label htmlFor={inputId}>{name}</label>
      <input onChange={handleAnyChange} id={inputId} type={type} min={min} max={max} />
    </div>
  )
}
