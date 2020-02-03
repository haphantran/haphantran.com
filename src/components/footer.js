import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Typography from "@material-ui/core/Typography"
import MuiLink from "@material-ui/core/Link"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://haphantran.com/">
          Ha Phan Tran
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  )
}

export default Footer
