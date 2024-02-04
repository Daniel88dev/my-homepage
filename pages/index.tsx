import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Daniel Hrynusiw | Web Developer</title>
        <meta
          name="description"
          content="Home page of Web developer Daniel Hrynusiw. I am looking for web development full stack projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
