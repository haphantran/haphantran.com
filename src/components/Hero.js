import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/socialLinks"
// import heroImg from "../assets/images/hero.svg"


import { StaticImage } from "gatsby-plugin-image"
const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>HaPhan Tran</h1>
            <h2>Business Intelligence Developer</h2>
            <br />
            <h4>Microsoft Certified Solutions Expert</h4>
            <h4>Azure Data Scientist Associate (Python, Spark)</h4>
            <h4>SAS Certified Professional: Advanced Programming</h4>
            <h4>PowerBI, Tableau and Alteryx Certified Specialist</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.png"
          alt="HaPhan's headshot"
          className="hero-img"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero