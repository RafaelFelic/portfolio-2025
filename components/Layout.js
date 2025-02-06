import Head from "next/head";
import Navigation from "./Navigation";
import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
});

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
      <AnimatedBackground />
      <main>{children}</main>
      <footer className="absolute bottom-0 w-full text-center text-white text-sm !p-4 font-light">
        <p>© 2025 Rafael Feliciano. All rights reserved.</p>
      </footer>
    </>
  );
}
