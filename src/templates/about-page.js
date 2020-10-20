import React from "react"
import { graphql } from "gatsby"

export default function AboutPage({ data }) {
  const { markdownRemark } = data
  return (
    <>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </>
  )
}

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
