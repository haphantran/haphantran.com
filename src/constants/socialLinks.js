import React from "react"
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaStrava
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon" />,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaYoutube className="social-icon" />,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon" />,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.twitter.com",
  },

  {
    id: 5,
    icon: <FaStrava className="social-icon"></FaStrava>,
    url: "https://www.twitter.com",
  },
  {
    id: 6,
    icon: <FaTwitter className="social-icon"></FaTwitter >,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
