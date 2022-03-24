import React from "react"
import classes from "./Header.module.scss"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h1>Navbar</h1>
      </div>
      <nav className={classes.header__content__nav}>
        <ul>
          <li>
            <a href="/people">People</a>
          </li>
          <li>
            <a href="/engagements">Engagements</a>
          </li>
          <li>
            <a href="/contant">Contant</a>
          </li>
        </ul>
        <button className={classes.header__content__navMobile}>
          <BiMenuAltRight />
        </button>
      </nav>
    </header>
  )
}

export default Header
