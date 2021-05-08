import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Blog = ({
  description,
  title,
  image,
  slug,
  category,
  date
}) => {
  return (
    <article className="blog">
      <Link to={`/blogs/${slug}`} className="project-slug">
      <GatsbyImage
        image={getImage(image)}
        className="blog-img"
        alt={title}
      />
      <div className="blog-card">
        
          <h4>{title}</h4>
          <p className="project-desc">{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
      </div>
      </Link>

</article>
  )
}

export default Blog