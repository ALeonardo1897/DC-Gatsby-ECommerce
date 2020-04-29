import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"

export default function thanks() {
  return (
    <>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra Exítosa</h2>
        <p>¡Gracias por la compra!</p>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
