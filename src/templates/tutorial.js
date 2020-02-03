import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulTutorial(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Tutorial = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulTutorial.title} />
      <h1> {props.data.contentfulTutorial.title}</h1>
      <p> {props.data.contentfulTutorial.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulTutorial.body.json,
        options
      )}
    </Layout>
  )
}

export default Tutorial
