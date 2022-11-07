import Link from "next/link";
import React, { useState } from "react";
import { pages } from "../utils/pages";
import Styles from "./Navbar.module.scss";
export default function NavBar() {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);
  return (
    <nav className={`${Styles.nav} ${active ? Styles.nav__active : ""}`}>
      <h2 className={Styles.nav__logo}>AFS</h2>
      <div className={Styles.nav__button} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={Styles.nav__list}>
        <li className={Styles.nav__list_item}>
          <Link href={pages.home}>Home</Link>
        </li>
        <li className={Styles.nav__list_item}>
          <Link href={pages.about}>About</Link>
        </li>
        <li className={Styles.nav__list_item}>
          <Link href={pages.students}>Students</Link>
        </li>
        <li className={Styles.nav__list_item}>
          <Link href={pages.contact}>Contact</Link>
        </li>
      </ul>
      <ul className={Styles.nav__list}>
        <li className={Styles.nav__list_item}>
          <Link href={pages.join} passHref>
            <a href="" className={`${Styles.button} `}>
              Join
            </a>
          </Link>
        </li>
        <li className={Styles.nav__list_item}>
          <Link href={pages.login}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
