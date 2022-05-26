import React, {useState, useContext} from "react"
import styles from "./Navbar.module.scss"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineCloseSquare} from "react-icons/ai"
import {AuthContextState} from "../../Utils/AuthContextState"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggler = () => setMenuOpen((p) => !p)
  const {authState} = useContext(AuthContextState)

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <a className={styles.header__content__logo} href={"/"}>
          <h1>SOS</h1>
        </a>
        <div>
          <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
            <a className={styles.nav__item} href={"/engagements"}>
              Engagements
            </a>
            <a className={styles.nav__item} href={"/people"}>
              People
            </a>
            <a className={styles.nav__item} href={"/contact"}>
              Contact
            </a>
            {!authState && (
              <>
                <a className={styles.nav__item} href={"/login"}>
                  Login
                </a>
              </>
            )}
          </nav>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
