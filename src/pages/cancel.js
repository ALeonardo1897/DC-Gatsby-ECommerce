import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"

export default function cancel() {
  return (
    <>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>¡Inténtelo de nuevo!</p>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
