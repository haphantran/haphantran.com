import React from "react"
import Seo from '../components/Seo'

const contact = () => {
  return (
    <>
    <Seo title="Contact" description="Ha Phan Tran Contact page"/>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form method="post" name="contact" action="/success" netlify-honeypot="bot-field" data-netlify="true"  >
    
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input name="name" type="text" placeholder="name" className="form-control" /> 
            <input name="email" type="email" placeholder="email" className="form-control" /> 
            <textarea name="message" id="" rows="5" placeholder="message" className="form-control-text-area"></textarea>
          </div>  
          <button type="submit" className="submit-btn btn">send me an email here </button>
        </form>
        </article></section>
       </>
 )
}

export default contact
