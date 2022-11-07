import { Menu, Typography } from "antd";
import React, { ReactNode, ReactPropTypes } from "react";
import NavBar from "../navbar/NavBar";

const Flex = ({ children }: { children: JSX.Element[] | ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
export default function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
      }}
    >
      <NavBar />
      <Flex>
        <Typography.Title>School</Typography.Title>
      </Flex>
    </div>
  );
}
