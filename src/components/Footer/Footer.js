import React from "react"
import styles from "./Footer.module.scss"
import CDW from "../../images/footerLogos/cfdw.png"
import ITU from "../../images/footerLogos/itu.png"
import AGDER from "../../images/footerLogos/agder.png"
import GOTHENBURG from "../../images/footerLogos/gothenburg.png"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__grid}>
      <div className={styles.footer__grid__sitemap} style={{paddingBottom: "20px"}}>
        <h3>Site Map</h3>
        <ul>
          <li>
            <a style={{color: "white"}} href={"/engagements"}>
              Engagements
            </a>
          </li>
          <li>
            <a style={{color: "white"}} href={"/people"}>
              People
            </a>
          </li>
          <li>
            <a style={{color: "white"}} href={"/contact"}>
              Contact
            </a>
          </li>
          <li>
            <a style={{color: "white"}} href={"/cookies"}>
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
      <div
        className={styles.footer__grid__designDevelop}
        style={{color: "white", paddingBottom: "20px"}}
      >
        <h3>Design and Development</h3>
        <p>Barbara Nino and Antonia Bruno</p>
      </div>
      <div className={styles.footer__grid__sponsors} style={{color: "white"}}>
        <h3>Sponsors</h3>
        <div className={styles.container}>
          <a
            className={styles.container__gu}
            aria-label="opens webpage for our partner center for digital welfare"
            href="https://cdw.itu.dk/ "
          >
            <img
              className={styles.container__gu__img}
              src={CDW}
              alt="Logo for one of our sponsors CDW"
            />
          </a>

          <a
            className={styles.container__ager}
            aria-label="opens webpage for our partner for university of agder"
            href="https://www.uia.no/en"
          >
            <img
              className={styles.container__ager__img}
              src={AGDER}
              alt="Logo for one of our sponsors University of Agder"
            />
          </a>
          <a
            className={styles.container__goth}
            aria-label="opens webpage for our partner center for gothenburg university"
            href="https://www.gu.se/en"
          >
            <img
              className={styles.container__goth__img}
              src={GOTHENBURG}
              alt="Logo for one of our sponsors University of Gothenburg"
            />
          </a>
          <a
            className={styles.container__itu}
            aria-label="opens webpage for our partner for ITU"
            href="https://itu.dk/"
          >
            <img
              className={styles.container__itu__img}
              src={ITU}
              alt="Logo for one of our sponsors ITU"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
