import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import Language from "./language"
import Image from "./image"
import NavMenu from "./navMenu"
import MobileMenu from "./mobileMenu"

import "./header.css"

const Header = ({ siteTitle, props }) => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "lakeside-icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="container">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <Image src={siteTitle} visual={data.logo.childImageSharp.fluid} />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="mobile-menu hide-on-large-only show-on-medium-and-down"
          >
            <svg
              style={{ display: open ? "block" : "none" }}
              className="mobile-exit"
              width="37"
              height="37"
              viewBox="0 0 37 37"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect width="15.557" height="15.557" fill="none" />
                </clipPath>
              </defs>
              <g
                id="Group_11"
                data-name="Group 11"
                transform="translate(-301 -32)"
              >
                <g id="Group_6" data-name="Group 6" transform="translate(0 8)">
                  <g
                    id="Backward"
                    transform="translate(301 60.571) rotate(-90)"
                  >
                    <rect
                      id="Rectangle_1073"
                      data-name="Rectangle 1073"
                      width="37"
                      height="37"
                      rx="10"
                      transform="translate(-0.429)"
                      fill="#e4f2ef"
                    />
                  </g>
                </g>
                <g
                  id="Cancel"
                  transform="translate(312 43)"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Union_3"
                    data-name="Union 3"
                    d="M7.778,9.192,1.414,15.557,0,14.142,6.364,7.778,0,1.414,1.414,0,7.778,6.364,14.142,0l1.415,1.414L9.192,7.778l6.364,6.364-1.415,1.415Z"
                    fill="#00b37b"
                  />
                </g>
              </g>
            </svg>
            <svg
              style={{ display: open ? "none" : "block" }}
              className="hamburger"
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
            >
              <g
                id="Group_6"
                data-name="Group 6"
                transform="translate(-301 -24)"
              >
                <g id="Backward" transform="translate(301 60.571) rotate(-90)">
                  <rect
                    id="Rectangle_1073"
                    data-name="Rectangle 1073"
                    width="37"
                    height="37"
                    rx="10"
                    transform="translate(-0.429)"
                    fill="#e4f2ef"
                  />
                </g>
                <g id="Menu" transform="translate(311 35)">
                  <path
                    id="Menu-2"
                    data-name="Menu"
                    d="M-6160,14V12h10v2Zm0-6V6h16V8Zm0-6V0h16V2Z"
                    transform="translate(6160)"
                    fill="#00b37b"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="nav-menu hide-on-med-and-down">
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
              className="translate hide-on-med-and-down"
            >
              <Language />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        activeMobile={
          open ? "show-on-medium-and-down" : "hide-on-medium-and-down"
        }
      />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
