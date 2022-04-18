import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Developer Portfolio</title>
      </Head>
      <div>
        <Hero />
        <Projects />
      </div>
    </>
  );
}
