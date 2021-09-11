import React from "react"
import { Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./hero.css"

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero-img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <div className="hero-content container">
        <h1>Lakeside Driving School</h1>

        <Link to="/about" className="btn hero-btn">
          ABOUT US
        </Link>
      </div>
      <BackgroundImage
        className="img-container"
        fluid={data.hero.childImageSharp.fluid}
      ></BackgroundImage>
    </div>
  )
}

export default Hero
