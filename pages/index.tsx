import type { NextPage } from "next";
import Head from "next/head";
import Block from "../components/blocks/Block";
import Button from "../components/button/Button";
import NavBar from "../components/navbar/NavBar";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <Block variant="contained">
        <h1>AFRICAN TECH SCHOOL</h1>
        <p style={{ maxWidth: "50ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nostrum debitis aliquam ad facilis! Eius, eos debitis sunt, molestiae
          reiciendis aperiam esse officia quod, rerum voluptas ipsum praesentium
          vero id!
        </p>
        <Button variant="outlined">Join Us!</Button>
      </Block>
      {/* <Button>Click me</Button> */}
    </main>
  );
};

export default Home;
