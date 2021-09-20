import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const About = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      aboutEs: markdownRemark(fileAbsolutePath: { regex: "/acerca-de/" }) {
        frontmatter {
          title
        }
        id
        html
      }
    }
  `)
  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "about.pagetitle" })}
      />
      <Paragraph
        title={intl.formatMessage({ id: "about.pagetitle" })}
        message={data.about.html}
      />
    </Layout>
  )
}

export default injectIntl(About)
