import React from "react"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import Seo from '../components/Seo'


const BlogPage = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <>
      <Seo title="Blogs" description="Ha Phan Tran blog posts" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog posts" />
      </section>
    </>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default BlogPage
