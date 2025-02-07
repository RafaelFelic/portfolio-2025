import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>
      <footer className="absolute bottom-0 w-full text-center text-gray-300 text-sm p-4 font-light">
        <p>© 2025 Rafael Feliciano. All rights reserved.</p>
      </footer>
    </div>
  );
}
