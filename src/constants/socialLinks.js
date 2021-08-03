import React from "react"
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaStrava
} from "react-icons/fa"
import { SiTiktok } from "react-icons"

const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon" />,
    url: "https://www.facebook.com/haphan.ca",
  },
  {
    id: 2,
    icon: <FaYoutube className="social-icon" />,
    url: "https://www.youtube.com/c/HaPhanTran",
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
    icon: <FaInstagram className="social-icon"></FaInstagram >,
    url: "https://www.instagram.com/haphantran/",    
  },
  {
    id: 6,
    icon: <FaInstagram className="social-icon"></FaInstagram >,
    url: "https://www.instagram.com/haphantran/",    
  },
   {
    id: 7,
    icon: <SiTiktok className="social-icon"></SiTiktok >,
    url:  "https://www.tiktok.com/@haphantran.com",    
  },
 
]

export default data
