import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
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



  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>I'm HaPhan</h1>
          <h4>Business Intelligence Developer and Web/Mobile App Developer </h4>
          <Link to='/contact' className="btn"> contact me</Link>
          <SocialLinks></SocialLinks>

        </div>
      </article>
      <Image fluid={fluid} className="hero-img"></Image>

    </div> </header>
}

export default Hero
