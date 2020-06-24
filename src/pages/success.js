import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Success = () => {
  return (
    <Layout>
    <SEO title="Thank you"/>
      <main className="error-page">
    <div className="error-container">
      <h1>Thank you for your message. I will reply soon.</h1>
      <Link to="/" className='btn'>back home</Link>
    </div>
  </main></Layout>
    
    )
}

export default Success
