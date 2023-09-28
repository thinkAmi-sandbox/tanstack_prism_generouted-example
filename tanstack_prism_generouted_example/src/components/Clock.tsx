import {useEffect, useState} from "react";

export const Clock = () => {
  const [current, setCurrent] = useState(new Date())

  useEffect(() => {
    setTimeout(() => {setCurrent(new Date())}, 1000)
  }, [current])

  const padZero = (value: number) => value.toString().padStart(2, "0")

  return (
    <h2>{[current.getHours(), current.getMinutes(), current.getSeconds()].map((v) => padZero(v)).join(':')}</h2>
  )
}