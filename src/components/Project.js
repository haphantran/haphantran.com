import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaGithubSquare, FaShareSquare, FaGit } from "react-icons/fa"
const Project = ( {description, title, github, stack, url, image,index}) => {
  return <article className="project" >
    <Image fluid={image.childImageSharp.fluid} className="project-img"/>
<div className="project-info">
<span className="project-number">0{index+1}</span>
<h3>{title}</h3>
<p className="project-desc">
{description}</p>

<div className="project-stack">
  {stack.map( (item) => {

    return <span key={item.id}> {item.title}</span>
  })}
</div>

<div className="project-links">
  { github &&  <Link href={github}>
    <FaGithubSquare className="project-icon"/>
  </Link>}
  <Link href={url}>
    <FaShareSquare className="project-icon"/>
  </Link>
  </div>

</div>
    </article>
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default Project
