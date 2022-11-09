import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Block from "../components/blocks/Block";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Container from "../components/container/Container";
import Grid from "../components/grid/Grid";
import NavBar from "../components/navbar/NavBar";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <NavBar />
      <Block variant="contained">
        <Container>
          <div className="grid sm:grid-cols-1  md:grid-cols-2 items-center text-white ">
            <div className="capitalize ">
              <h1>Wanna pursue a career in tech ?</h1>
              <p>
                Don't worry we are here to guide you archive that dream. Begin
                your step by step approach into software engineering today.
              </p>
            </div>
            <Image
              src={"/assets/images/blob.svg"}
              height={500}
              width={500}
              alt="A blob shape"
            />
          </div>
        </Container>
      </Block>
      <Block variant="normal">
        <Container>
          <header className="p-6">
            <h3 className="text-center text-6xl ">What You will learn</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              labore fuga suscipit eligendi illo exercitationem.
            </p>
          </header>
        </Container>
      </Block>
    </main>
  );
};

export default Home;
