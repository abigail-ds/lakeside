import React from "react"

import "./paragraphSection.css"

const Paragraph = props => {
  return (
    <div id="stage" className="paragraph section">
      <h3>{props.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
    </div>
  )
}

export default Paragraph
