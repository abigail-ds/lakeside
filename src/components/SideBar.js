import React from "react"
import { Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import HorizontalRule from "./HorizontalRule"

import "./SideBar.css"

const SideBar = props => {
  const data = useStaticQuery(graphql`
    query {
      phone: markdownRemark(fileAbsolutePath: { regex: "/footer/" }) {
        frontmatter {
          en_phone
        }
      }
    }
  `)
  return (
    <div id="stage" className="section">
      <div style={{ marginBottom: "20px" }}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
        <Link to="/registration" class="btn hero-btn">
          REGISTER HERE!
        </Link>
      </div>
      <HorizontalRule altColor={"horizontal-line"} />
      <h6 style={{ fontWeight: "600", paddingTop: "20px" }}>{props.caption}</h6>
      <p>
        <span style={{ fontWeight: "600" }}>Phone Number: </span>
        <a href={`tel:${data.phone.frontmatter.en_phone}`}>
          {data.phone.frontmatter.en_phone}
        </a>
      </p>
    </div>
  )
}

export default SideBar
