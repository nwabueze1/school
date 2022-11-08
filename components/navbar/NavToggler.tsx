import React from "react";
import Styles from "./Navbar.module.scss";

export default function NavToggler(props: {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <div className={Styles.nav__button} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
