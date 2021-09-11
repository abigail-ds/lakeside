import React from "react"
import { Footer } from "react-materialize"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import "./footer.css"

const FooterRender = ({ props, intl }) => {
  const footerStyles = {
    color: "#50E3C2",
  }

  const data = useStaticQuery(graphql`
    query {
      footer: markdownRemark(fileAbsolutePath: { regex: "/footer/" }) {
        frontmatter {
          en_phone
          contact_hours
          fb_link
        }
      }
    }
  `)

  return (
    <div className="footer-render">
      <Footer
        copyrights={`Digital Anthro,LLC - Copyright ${new Date().getFullYear()}`}
        links={
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111489.18005525714!2d-77.53977893371655!3d37.668487607253354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b116c99d0dc009%3A0xf22a5fe2a8ee0f76!2sAbigail&#39;s%20Driving%20School!5e0!3m2!1sen!2sus!4v1585315330517!5m2!1sen!2sus"
            width="100%"
            height="400px"
          ></iframe>
        }
      >
        <h3 className="contact-title">
          {intl.formatMessage({ id: "contact.contact" })}
        </h3>
        <div className="row">
          <div className="col s12 m6">
            <ul className="contact-list">
              <li>
                <span>
                  <b>{intl.formatMessage({ id: "contact.enPhone" })}: </b>
                </span>
                <a href={`tel: ${data.footer.frontmatter.en_phone}`}>
                  {data.footer.frontmatter.en_phone}
                </a>
              </li>
              <li>
                <span>
                  <b>{intl.formatMessage({ id: "contact.email" })}: </b>
                </span>
                abigailsInstructor@gmail.com
              </li>
              <li>
                <span>
                  <b>{intl.formatMessage({ id: "contact.hours" })}: </b>
                </span>
                With Appointment
              </li>
              <li>
                <span>
                  <b>{intl.formatMessage({ id: "contact.contact_hours" })}: </b>
                </span>
                {data.footer.contact_hours}
              </li>
            </ul>
            <div className="social-media">
              <li>
                <a
                  style={footerStyles}
                  className="text-lighten-3"
                  href={data.footer.frontmatter.fb_link}
                  target="_blank"
                >
                  <svg
                    fill="#50E3C2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    {" "}
                    <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z" />
                  </svg>{" "}
                  @AbigailsDrivingSchool
                </a>
              </li>
            </div>
          </div>
          <div className="col s12 m6">
            <ul className="contact-list">
              <li>
                <span>
                  <b>{intl.formatMessage({ id: "contact.address" })}: </b>
                  <br />
                  6002 W. Broad St., Suite 203
                  <br />
                  Richmond, VA 23230
                </span>
                <br />
                <span>
                  (Office Open Per Appointment)
                  <br />
                  **Next to Mekong Restaurant
                </span>
              </li>
              <li>
                <span>
                  <b>{intl.formatMessage({ id: "contact.service_area" })}: </b>
                  <br />
                </span>
                <span>Richmond, VA</span>
                <br />
                <span>Henrico County</span>
                <br />
                <span>Chesterfield County</span>
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default injectIntl(FooterRender)
