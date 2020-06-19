import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Navbar from "../components/Navbar"
export default () => {
  return <Layout>
    <Navbar />
    <Hero />
    <Services />
  </Layout>
}
// ...GatsbyImageSharpFluid
