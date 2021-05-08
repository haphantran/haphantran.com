import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map((blog, index) => {
          return <Blog key={blog.id} index={index} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blogs" className="btn center-btn">
          View all blog posts
        </Link>
      )}
    </section>
  )
}

export default Blogs