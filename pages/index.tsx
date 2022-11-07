import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/navbar/NavBar";
import Styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <NavBar />
    </main>
  );
};

export default Home;
