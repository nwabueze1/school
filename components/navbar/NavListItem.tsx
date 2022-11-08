import Link from "next/link";
import React, { ReactNode } from "react";
import { pages } from "../utils/pages";
import Styles from "./Navbar.module.scss";

export default function NavListItem(props: { children: ReactNode }) {
  return <li className={Styles.nav__list_item}>{props.children}</li>;
}
