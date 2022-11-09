import Image from "next/image";
import React from "react";
import Styles from "./Navbar.module.scss";

export default function NavToggler(props: {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <div className={Styles.nav__button} onClick={props.onClick}>
      <Image
        src={"/assets/images/menu.svg"}
        height={50}
        width={50}
        className={Styles.nav_toggler}
      />
    </div>
  );
}
