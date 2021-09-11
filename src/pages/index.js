import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import "materialize-css/dist/css/materialize.min.css"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SideBar from "../components/SideBar"
import Paragraph from "../components/paragraphSection"
import SimpleSlider from "../components/SimpleSlider"

const IndexPage = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      home: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      accreditedLogo: file(relativePath: { eq: "accredited-biz-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout>
      <Hero herotitle={intl.formatMessage({ id: "home.herotitle" })} />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "home.title" })}
        keywords={[`driving school`, `richmond virginia`, `drivers education`]}
      />
      <div className="brand-section">
        <div className="row side" style={{ display: "flex" }}>
          <div class="col s12 m12 l5">
            <Paragraph
              title={intl.formatMessage({ id: "home.pagetitle" })}
              message={data.home.html}
            />
            <Image visual={data.accreditedLogo.childImageSharp.fixed} />
            {/* <SimpleSlider
              title={intl.formatMessage({
                id: "home.testimonials.testimonial_title",
              })}
            /> */}
          </div>
          <div className="col l5 m12 s12">
            <div className="cta-sidebar">
              <SideBar
                title={intl.formatMessage({
                  id: "home.sidebar.title",
                })}
                message={intl.formatMessage({
                  id: "home.sidebar.message",
                })}
                caption={intl.formatMessage({
                  id: "home.sidebar.caption",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
