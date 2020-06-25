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
    url: "https://www.facebook.com/haphan.ca",
  },
  {
    id: 2,
    icon: <FaYoutube className="social-icon" />,
    url: "https://www.youtube.com/channel/UC3qTWblpx2XhPDI8gwGnZ-A",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon" />,
    url: "https://www.instagram.com/haphantran",
  },
  {
    id: 4,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/haphantran",
  },

  {
    id: 5,
    icon: <FaStrava className="social-icon"></FaStrava>,
    url: "https://www.strava.com/athletes/7661487",
  },
  {
    id: 6,
    icon: <FaTwitter className="social-icon"></FaTwitter >,
    url: "https://www.twitter.com/haphantran",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
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
