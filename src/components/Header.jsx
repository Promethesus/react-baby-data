import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Header.module.scss"
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
          <h2 className={styles.header_content_logo}>BabyData</h2>
        <nav className={styles.header_content_nav}>
          <ul>
            <li><Link to={"/histograms"}>Histograms</Link></li>
            <li><Link to={"/"}>PageTwo</Link></li>
            <li><Link to={"/"}>PageThree</Link></li>
          </ul>
          <button className={styles.signUp}>SignUp</button>
          <button className={styles.login}>Login</button>
        </nav>
        <div className={styles.header_content_toggle}>
          <BiMenuAltRight/>
        </div>
      </div>
    </header>
  )
}

export default Header