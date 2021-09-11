import React from "react"

import "./form.css"

export default props => (
  <section>
    <div dangerouslySetInnerHTML={{ __html: props.googleForm }} />
  </section>
)
