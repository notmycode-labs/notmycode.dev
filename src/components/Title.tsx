"use client"
import { TypeAnimation } from "react-type-animation"

export const Title = () => {
  return (
    <TypeAnimation
      sequence={["notmycode", 1000, " notmycode.dev"]}
      speed={50}
      cursor={false}
    />
  )
}
