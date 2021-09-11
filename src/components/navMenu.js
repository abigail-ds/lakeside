import { Link } from "gatsby-plugin-intl"
import React from "react"

import "./navMenu.css"

const NavMenu = props => (
  <div className="nav-menu">
    <Link to="/">{props.home}</Link>
    <Link to="/about">{props.about}</Link>
    <Link to="/services">{props.services}</Link>
    <Link to="/drivers-improvement">{props.driversImp}</Link>
    <Link to="/drivers-manual">{props.driversManual}</Link>
    <Link to="/registration">{props.registration}</Link>
    <Link to="/faq">{props.faq}</Link>
    <Link to="/online-training">{props.training}</Link>
    <Link className="btn" to="/news">
      News
    </Link>
  </div>
)

export default NavMenu
