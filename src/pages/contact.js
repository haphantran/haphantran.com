import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const contact = () => {
  return <Layout>
  <SEO title="Contact" description="Ha Phan Tran Contact page"/>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <div className="form-group">
            <input name="name" type="text" placeholder="name" className="form-control" /> 
            <input name="email" type="email" placeholder="email" className="form-control" /> 
            <textarea name="message" id="" rows="5" placeholder="message" className="form-control"></textarea>
          </div>  
          <button type="submit" className="submit-btn btn">send me an email here </button>
        </form>
      </article></section>
  </Layout>
}

export default contact
