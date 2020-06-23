import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }  

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
