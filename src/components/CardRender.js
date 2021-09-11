import React, { useRef, useEffect } from "react"
import { Card, CardTitle, Icon, Col, Row } from "react-materialize"
import { useStaticQuery, graphql } from "gatsby"
// import { TweenMax, TimelineLite, TimelineMax, Power3 } from "gsap"
// import ScrollMagic from "scrollmagic"
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

import "../components/CardRender.css"

const CardRender = props => {
  const data = useStaticQuery(graphql`
    query {
      servicesHero: file(relativePath: { eq: "service-hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      driversEdHero: file(relativePath: { eq: "driver-improvement-hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      registrationHero: file(relativePath: { eq: "registration-hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trainingHero: file(relativePath: { eq: "training-hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // render variable based on the path matching the page routes
  const path = typeof window !== "undefined" ? window.location.pathname : ""
  let heroImg

  if (path.match("/services.*")) {
    heroImg = data.servicesHero.childImageSharp.fluid.src
  } else if (path.match("/drivers-improvement.*")) {
    heroImg = data.driversEdHero.childImageSharp.fluid.src
  } else if (path.match("/drivers-manual.*")) {
    heroImg = data.driversEdHero.childImageSharp.fluid.src
  } else if (path.match("/registration.*")) {
    heroImg = data.registrationHero.childImageSharp.fluid.src
  } else if (path.match("/online-training.*")) {
    heroImg = data.trainingHero.childImageSharp.fluid.src
  } else {
    heroImg = data.servicesHero.childImageSharp.fluid.src
  }

  return (
    <div className="section card-hero">
      <Row>
        <Col m={12} s={12} className={"split-card"} style={{ display: "flex" }}>
          <Col
            className={"card-text desktop"}
            m={4}
            s={12}
            style={{
              padding: "40px",
              backgroundColor: "#01b37b",
            }}
          >
            <h3>{props.pagetitle}</h3>
            {/* <p> {props.message}</p> */}
          </Col>
          <Col m={12} s={12} style={{ padding: "0", lineHeight: "0" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={heroImg}
            ></img>
          </Col>
          <Col
            className={"card-text mobile"}
            m={12}
            s={12}
            style={{ padding: "40px", backgroundColor: "#01b37b" }}
          >
            <h3>{props.pagetitle}</h3>
            <p>{props.message}</p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default CardRender
