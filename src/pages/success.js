import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Success = () => {
  return (
    <Layout>
      <Seo title="Thank you" />
      
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
