import React, { ReactNode } from "react";
import Styles from "./Navbar.module.scss";

export default function NavList(props: { children: ReactNode }) {
  return <ul className={Styles.nav__list}>{props.children}</ul>;
}
