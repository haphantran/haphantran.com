import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>HaPhan Tran</h1>
            <h2>Business Intelligence Developer</h2>
            <br />
            <h4>Microsoft Certified Solutions Expert</h4>
            <h4>Azure Data Scientist Associate</h4>
            <h4>SAS Certified Professional: Advanced Programming</h4>
            <h4>Tableau and Alteryx Certified Specialist</h4>
            <Link to="/contact" className="btn">
              {" "}
              contact me
            </Link>
            <SocialLinks></SocialLinks>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img"></Image>
      </div>{" "}
    </header>
  )
}

export default Hero
