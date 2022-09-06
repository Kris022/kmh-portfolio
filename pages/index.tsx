import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KMH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1000px] mx-auto">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Home;
