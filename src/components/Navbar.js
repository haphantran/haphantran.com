import React from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/"><img src={logo} alt="logo" /></Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
         <div className="nav-links">
          {PageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                 {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
