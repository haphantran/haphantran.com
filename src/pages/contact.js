import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import MuiLink from "@material-ui/core/Link"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <MuiLink color="primary" href="https://twitter.com/haphantran">
          @haphantran
        </MuiLink>{" "}
        on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
