import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const Faq = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      faq: markdownRemark(fileAbsolutePath: { regex: "/faq/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      faqEs: markdownRemark(
        fileAbsolutePath: { regex: "/preguntas-frecuentes/" }
      ) {
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
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "faq.title" })} />
      <Paragraph
        title={intl.formatMessage({ id: "faq.pagetitle" })}
        message={data.faq.html}
      />
    </Layout>
  )
}

export default injectIntl(Faq)
