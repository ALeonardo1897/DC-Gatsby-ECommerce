import React from "react"
import { StyledJumbo } from "../styles/components"

import { Image } from "../components"

export default function Jumbo() {
  return (
    <StyledJumbo>
      <div>
        <h2>Gatsby ECommerce</h2>
        <small>Adquiere tus mejores productos</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}
