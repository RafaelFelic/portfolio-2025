import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}
