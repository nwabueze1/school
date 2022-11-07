import { Html, Main, NextScript } from "next/document";
import Head from "next/head";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="assets/images/favicon.ico" />

        <link href="assets/libs/tobii/css/tobii.min.css" rel="stylesheet" />
        <link
          href="assets/libs/@iconscout/unicons/css/line.css"
          type="text/css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/icons.min.css" />
        <link rel="stylesheet" href="assets/css/tailwind.min.css" />
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
