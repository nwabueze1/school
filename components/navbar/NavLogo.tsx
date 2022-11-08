import React from "react";
import { pages } from "../utils/pages";
import Styles from "./Navbar.module.scss";
import NavLink from "./NavLink";

export default function NavLogo() {
  return (
    <h2 className={Styles.nav__logo}>
      <NavLink href={pages.home}>AFTS</NavLink>
    </h2>
  );
}
