import React from "react"
import styles from "./Header.module.scss"

const Header = ({header}) => {
  return <h1 className={styles.header}>{header}</h1>
}

export default Header
