import React, { ReactNode } from "react";
import Styles from "./Container.module.scss";

export default function Container(props: { children: ReactNode }) {
  return <div className={Styles.container}>{props.children}</div>;
}
