import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProjectStyle from "./project.module.scss"
import Head from "../components/head"

const TutorialPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTutorial(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            description {
              description
            }
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Tutorial" />
      <h1>Tutorials</h1>
      <ol className={ProjectStyle.posts}>
        {data.allContentfulTutorial.edges.map((edge, idx) => {
          return (
            <li key={idx} className={ProjectStyle.post}>
              <Link to={`/tutorial/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p> {edge.node.description.description} </p>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default TutorialPage
