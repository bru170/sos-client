import React from "react"
import Header from "../../components/Headers/Header"

const Cookies = () => {
  return (
    <>
      <main>
        <Header header="Cookie Policy" />
        <p>
          data from you to run the basic functions of the website. If you have any further questions
          you can read the IT University of Copenhagen's privacy policy.{" "}
          <a
            href="https://en.itu.dk/About-ITU/Privacy"
            aria-describedby="goes to privacy policy text on itu website"
          >
            privacy policy
          </a>
          .
        </p>
      </main>
    </>
  )
}

export default Cookies
