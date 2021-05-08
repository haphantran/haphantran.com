import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Error" description="Error Page - Ha Phan Tran website" />
      <main className="error-page">
        <div className="error-container">
          <h1>Opps this page is not exist</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
