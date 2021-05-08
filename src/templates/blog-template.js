import React from "react"
import { graphql, Link } from "gatsby"
import Markdown from "react-markdown";
import Seo from '../components/Seo'

const BlogTemplate = ({ data }) => {
  const { content , title, desc} = data.blog

  return (
    <>
      <Seo title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
              <h2>{title}</h2>
            <p>{desc}</p>

            <Markdown children={content}  />
          </article>

          <Link to="/blog" className="btn center-btn"> blog</Link>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      desc      
      content
    }
  }
`

export default BlogTemplate
