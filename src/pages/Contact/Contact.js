import React from "react"
import Header from "../../components/Headers/Header"

const Contact = () => {
  return (
    <>
      <main>
        <Header header="Contact Us" />
        <p>
          If you run into any issues while browsing the site or you have any questions or comments
          regarding the project, please write to our Project Manager Laura Junker.{" "}
          <a
            href="mailto:laju@itu.dk?body=Contacting you from the SOS website"
            aria-describedby="opens external mailing service"
          >
            Send an email to Laju@itu.dk
          </a>
        </p>
      </main>
    </>
  )
}

export default Contact
