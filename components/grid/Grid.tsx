import React, { ReactNode } from "react";
import Styles from "./Grid.module.scss";

export default function Grid(props: { children: ReactNode }) {
  return <div className={Styles.container}>{props.children}</div>;
}
