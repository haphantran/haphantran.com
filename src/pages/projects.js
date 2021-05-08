import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const ProjectsPage = ({
  data: {
    allStrapiProjects : { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        featured
        github
        id
        title
        url
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage
