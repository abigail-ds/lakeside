import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const News = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      news: markdownRemark(fileAbsolutePath: { regex: "/news/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      newsEs: markdownRemark(fileAbsolutePath: { regex: "/noticias/" }) {
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
        title={intl.formatMessage({ id: "news.title" })}
      />
      <Paragraph
        title={intl.formatMessage({ id: "news.title" })}
        message={data.news.html}
      />
    </Layout>
  )
}

export default injectIntl(News)
