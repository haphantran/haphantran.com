import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProjectStyle from "./project.module.scss"
import Head from "../components/head"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
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
      <Head title="Projects" />
      <h1>Projects</h1>
      <ol className={ProjectStyle.posts}>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li className={ProjectStyle.post}>
              <Link to={`/project/${edge.node.slug}`}>
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

export default ProjectPage
