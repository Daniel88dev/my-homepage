import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Daniel Hrynusiw | Web Developer</title>
        <meta
          name="description"
          content="Full-stack web developer based in Brno, Czech Republic. Projects, experience, and contact."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Daniel Hrynusiw" />
        <meta property="og:title" content="Daniel Hrynusiw | Web Developer" />
        <meta
          property="og:description"
          content="Full-stack web developer based in Brno, Czech Republic. Projects, experience, and contact."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Daniel Hrynusiw | Web Developer" />
        <meta
          name="twitter:description"
          content="Full-stack web developer based in Brno, Czech Republic. Projects, experience, and contact."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
