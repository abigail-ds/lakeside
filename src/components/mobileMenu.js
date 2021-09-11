import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import NavMenu from "./navMenu"
import Language from "./language"
import "./mobileMenu.css"

const MobileMenu = props => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      info: markdownRemark(fileAbsolutePath: { regex: "/footer/" }) {
        frontmatter {
          fb_link
        }
      }
    }
  `)

  return (
    <div className={`mobile-menu-container ${props.activeMobile}`}>
      <div className="container">
        <NavMenu
          home={intl.formatMessage({
            id: "home.menu_items.home",
          })}
          about={intl.formatMessage({
            id: "home.menu_items.about",
          })}
          services={intl.formatMessage({
            id: "home.menu_items.services",
          })}
          driversImp={intl.formatMessage({
            id: "home.menu_items.drivers_imp",
          })}
          driversManual={intl.formatMessage({
            id: "home.menu_items.drivers_manual",
          })}
          registration={intl.formatMessage({
            id: "home.menu_items.registration",
          })}
          faq={intl.formatMessage({
            id: "home.menu_items.faq",
          })}
          training={intl.formatMessage({
            id: "home.menu_items.training",
          })}
        />
        <div
          style={{ marginTop: "10px" }}
          className="translate show-on-med-and-down"
        >
          <Language />
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
