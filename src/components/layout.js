import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
// import IdentityModal, {
//   useIdentityContext,
// } from "react-netlify-identity-widget"
// import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import Header from "./header"
import FooterRender from "./FooterRender"
import "./layout.css"

const Layout = ({ children, intl }) => {
  // const identity = useIdentityContext()
  // const [dialog, setDialog] = React.useState(false)
  // const name =
  //   (identity &&
  //     identity.user &&
  //     identity.user.user_metadata &&
  //     identity.user.user_metadata.name) ||
  //   "NoName"
  // const isLoggedIn = identity && identity.isLoggedIn

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <nav style={{ background: "gray" }}>
        {" "}
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      </nav> */}
      <Header siteTitle={intl.formatMessage({ id: "home.title" })} />
      <div className="container">
        <main>{children}</main>
        {/* <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
        /> */}
      </div>
      <footer>
        <FooterRender />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
