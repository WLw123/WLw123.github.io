import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
  <div style={{ color: `teal` }}>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>
  <Link to='/'>Home</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`