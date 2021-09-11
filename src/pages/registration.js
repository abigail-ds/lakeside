import React from "react"
import { injectIntl, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import CardRender from "../components/CardRender"
import { useStaticQuery } from "gatsby"

const Registration = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      products: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/products/" } }
      ) {
        nodes {
          fileAbsolutePath
          frontmatter {
            string
            price
            number
          }
        }
      }
      form: markdownRemark(fileAbsolutePath: { regex: "/form/" }) {
        html
      }
    }
  `)
  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout>
      <CardRender
        pagetitle={intl.formatMessage({ id: "registration.pagetitle" })}
        message={intl.formatMessage({ id: "registration.message" })}
      />
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "registration.title" })}
      />
      <Form googleForm={data.form.html} />
    </Layout>
  )
}

export default injectIntl(Registration)
