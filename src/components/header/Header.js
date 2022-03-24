import React, {useState} from "react"
import styles from "./Header.module.scss"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineCloseSquare} from "react-icons/ai"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggler = () => setMenuOpen((p) => !p)

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>
            <a href={"/"}>SOS</a>
          </span>
        </div>
        <div>
          <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
            <a className={styles.nav__item} href={"/people"}>
              People
            </a>
            <a className={styles.nav__item} href={"/engagements"}>
              Engagements
            </a>
            <a className={styles.nav__item} href={"/contact"}>
              Contact
            </a>
          </nav>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  )
}

const Button = () => {
  return <button className={styles.button}>Click me</button>
}

export default Header
