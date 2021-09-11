import React, { Component } from "react"
import PropTypes from "prop-types"

import AccordionSection from "./AccordionSection"
import { ReactIntlError } from "react-intl"

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props)

    const openSections = {}
    this.state = { openSections }
  }

  onClick = label => {
    const {
      state: { openSections },
    } = this

    const isOpen = !!openSections[label]

    this.setState({
      openSections: {
        [label]: !isOpen,
      },
    })
  }

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this

    return (
      <div className="section">
        <div>
          {React.Children.map(child => (
            <AccordionSection
              key={child.props.label}
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
            >
              {child.props.children}
            </AccordionSection>
          ))}
        </div>
      </div>
    )
  }
}

export default Accordion
