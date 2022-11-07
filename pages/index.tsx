import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Collapsible from "../components/collapsible/Collapsible";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Collapsible />
    </div>
  );
};

export default Home;
