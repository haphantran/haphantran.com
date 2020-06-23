import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { FaProjectDiagram } from "react-icons/fa"
const Projects = ({ projects, title, showLink }) => {
  return <section className="section projects">
    <Title title={title}></Title>
    <div className="section-center project-center">
      {projects.map( (project,index) => {
        return <Project key={project.id} index={index} {...project} />
        
      })}
    </div>
    {
      showLink && <Link to='/projects' className="btn center-btn">all projects</Link>
    }


  </section>

}

export default Projects
