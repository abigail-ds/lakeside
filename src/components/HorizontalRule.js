import React from "react"

import "./HorizontalRule.css"

const HorizontalRule = props => (
  <div
    className={` ${props.altColor ? "alt-horizontal-line" : "horizontal-line"}`}
  ></div>
)

export default HorizontalRule
