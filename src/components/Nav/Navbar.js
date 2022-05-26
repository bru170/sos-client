import React, {useState, useContext} from "react"
import styles from "./Navbar.module.scss"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineCloseSquare} from "react-icons/ai"
import {AuthContextState} from "../../Utils/AuthContextState"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggler = () => setMenuOpen((p) => !p)
  const {authState, setAuthState} = useContext(AuthContextState)

  const logout = () => {
    localStorage.removeItem("accessToken")
    setAuthState({username: "", id: 0, status: false})
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <a className={styles.header__content__logo} href={"/"}>
          <h1>SOS</h1>
          {authState.status && (
            <>
              Welcome <p style={{textTransform: "capitalize"}}> {authState.username}</p>
            </>
          )}
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
            {authState.status && (
              <>
                <a className={styles.nav__item} href={"/createPost"}>
                  Create New Post
                </a>
                <a className={styles.nav__item} href={"/login"}>
                  <button className={styles.nav__item} onClick={logout}>
                    Logout
                  </button>
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
