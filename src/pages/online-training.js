import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"
import CardRender from "../components/CardRender"

const Training = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      training: markdownRemark(
        fileAbsolutePath: { regex: "/online-training/" }
      ) {
        frontmatter {
          title
        }
        id
        html
      }
      trainingEs: markdownRemark(
        fileAbsolutePath: { regex: "/entrenamiento-en-linea/" }
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
      <CardRender
        pagetitle={intl.formatMessage({ id: "training.pagetitle" })}
        message={intl.formatMessage({ id: "training.message" })}
      />
      <Paragraph
        title={intl.formatMessage({ id: "training.pagetitle" })}
        message={data.training.html}
      />
    </Layout>
  )
}

export default injectIntl(Training)
