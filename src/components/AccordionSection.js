import React, { Component } from "react"
import PropTypes from "prop-types"
import HorizontalRule from "./HorizontalRule"

import "../components/Accordion.css"

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    this.props.onClick(this.props.label)
  }

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this

    return (
      <div
        className="accordion-section"
        style={{
          background: isOpen ? "white" : "white",
          padding: "5px 10px",
        }}
      >
        <div
          onClick={onClick}
          style={{
            cursor: "pointer",
          }}
        >
          <h5>{label}</h5>
          <div
            style={{
              float: "right",
              top: "-40px",
              position: "relative",
            }}
          >
            {!isOpen && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <g id="Backward" transform="translate(0 50) rotate(-90)">
                    <rect
                      id="Rectangle_1073"
                      data-name="Rectangle 1073"
                      width="50"
                      height="50"
                      rx="10"
                      fill="#e4f2ef"
                    />
                    <g
                      id="Symbol_84"
                      data-name="Symbol 84"
                      transform="translate(730.1 -663) rotate(90)"
                    >
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
                        transform="translate(681 700)"
                        fill="#26a69a"
                      />
                    </g>
                  </g>
                </svg>
              </span>
            )}
            {isOpen && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <g id="Backward" transform="translate(0 50) rotate(-90)">
                    <rect
                      id="Rectangle_1073"
                      data-name="Rectangle 1073"
                      width="50"
                      height="50"
                      rx="10"
                      fill="#e4f2ef"
                    />
                    <g
                      id="Symbol_84"
                      data-name="Symbol 84"
                      transform="translate(730.1 -663) rotate(90)"
                    >
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
                        transform="translate(681 700)"
                        fill="#26a69a"
                      />
                    </g>
                  </g>
                </svg>
              </span>
            )}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "white",
              marginTop: 10,
            }}
          >
            {this.props.children}
          </div>
        )}
        <HorizontalRule />
      </div>
    )
  }
}

export default AccordionSection
