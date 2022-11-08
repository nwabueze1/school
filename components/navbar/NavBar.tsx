import React, { useState } from "react";
import { pages } from "../utils/pages";
import Styles from "./Navbar.module.scss";
import ButtonStyles from "../button/Button.module.scss";
import NavLink from "./NavLink";
import NavList from "./NavList";
import NavListItem from "./NavListItem";
import NavLogo from "./NavLogo";
import NavToggler from "./NavToggler";
import Button from "../button/Button";
import Container from "../container/Container";
export default function NavBar() {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);
  return (
    <nav className={`${Styles.nav} ${active ? Styles.nav__active : ""}`}>
      <NavLogo />
      <NavToggler onClick={handleToggle} />
      <NavList>
        <NavListItem>
          <NavLink href={pages.home}>Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href={pages.about}>About</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href={pages.students}>Students</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href={pages.contact}>Contact</NavLink>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem>
          <Button variant="contained">Join</Button>
        </NavListItem>
        <NavListItem>
          <Button variant="outlined">Login</Button>
        </NavListItem>
      </NavList>
    </nav>
  );
}
