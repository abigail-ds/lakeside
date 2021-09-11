import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"

const DriversImprovement = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      driversImp: markdownRemark(
        fileAbsolutePath: { regex: "/drivers-improvement/" }
      ) {
        frontmatter {
          title
          string
        }
        id
        html
      }
      driversImpEs: markdownRemark(
        fileAbsolutePath: { regex: "/mejora-de-conductores/" }
      ) {
        frontmatter {
          title
          string
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
        title={intl.formatMessage({ id: "drivers_improvement.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_improvement.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_improvement.message" })}
      />
      <CourseInfo
        style={{ marginBottom: "50px" }}
        message={data.driversImp.html}
        path={path}
        title={data.driversImp.frontmatter.string}
      />
    </Layout>
  )
}

export default injectIntl(DriversImprovement)
