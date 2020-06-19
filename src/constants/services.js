import React from "react"
import { FaCode } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { GrWorkshop } from "react-icons/gr"
export default [
  {
    id: 1,
    icon: <GrWorkshop className="service-icon" />,
    title: "Training Workshop",
    text: `With wide range of knowledge in the business and IT fields, I hosted several training workshop with fellow colleagues. The topics are but not limited to Database Design and Management, Python, Data Science, Excel, Data visulization. You can book me to hold a training workshop`,
  },
  {
    id: 2,
    icon: <MdWork className="service-icon" />,
    title: "Tutor",
    text: `I got my Bachelor degree in Banking and Finance. I self study most of my IT expertise (database design and management, coding, data visualization ...). I can help you to learn fast and effectively without spending hours to find what to learn and where to learn it. If you don't want to learn from me, I can also point out the trusted resources on each topic that can help you learn by yourself.`,
  },
  {
    id: 3,
    icon: <FaCode className="service-icon" />,
    title: "App development",
    text: `If you need a custom application for your business, I can help with newer (and better, faster) technologies (ReactJS, Java, Node). It can be either Web application, desktop application or Mobile application of your choice`,
  },
]
