import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/button/Button";
import NavBar from "../components/navbar/NavBar";
import Styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <NavBar />
      {/* <Button>Click me</Button> */}
    </main>
  );
};

export default Home;
