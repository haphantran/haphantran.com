import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import { Container, CssBaseline } from "@material-ui/core"

const Layout = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        maxWidth="md"
        style={{
          minHeight: "100vh",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Container
          style={{
            padding: "1rem",
            margin: 0,
            flexGrow: 1,
          }}
        >
          <div>{props.children}</div>
        </Container>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Layout
