import React, { ReactNode } from "react";
import Styles from "./Block.module.scss";

type block = "contained" | "normal";
export default function Block(props: { variant: block; children: ReactNode }) {
  return (
    <div
      className={`${Styles.block} ${
        props.variant === "contained" ? Styles.contained : ""
      }`}
    >
      {props.children}
    </div>
  );
}
