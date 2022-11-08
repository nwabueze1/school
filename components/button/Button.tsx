import React, { MouseEventHandler, ReactNode } from "react";
import Styles from "./Button.module.scss";

type variant = "contained" | "outlined";
export default function Button(props: {
  variant: variant;
  onClick?: MouseEventHandler;
  children?: ReactNode;
}) {
  return (
    <button
      className={`${Styles.button} ${
        props.variant === "outlined" ? Styles.outlined : Styles.contained
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
