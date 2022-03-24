import React from "react"
import styles from "./About.module.scss"

const About = ({children}) => {
  return <p className={styles.about}>{children}</p>
}

export default About
