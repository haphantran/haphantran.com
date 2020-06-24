import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Success = () => {
  return (
    <Layout>
      <SEO title="Thank you" />
      
      <main className="success-page">
        <div className="success-container">
          <h1>Thank you for contacting me</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Success
