import React from "react"
import { graphql } from "gatsby"
import { SEO, Jumbo, Product } from "../components"

export const query = graphql`
  query {
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo></Jumbo>
    <Product products={data.allStripeSku.edges} />
  </>
)

export default IndexPage
