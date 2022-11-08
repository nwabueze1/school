import Link from "next/link";
import React, { ReactNode } from "react";
import { Url } from "url";
import { pages } from "../utils/pages";

export default function NavLink(props: { href: string; children: ReactNode }) {
  return <Link href={props.href}>{props.children}</Link>;
}
