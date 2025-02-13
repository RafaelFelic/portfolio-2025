import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>
      <header className="sticky top-0 z-50 shadow-lg">
        <Navigation />
      </header>

      <main>{children}</main>
      <footer className="absolute bottom-0 w-full text-center text-gray-300 text-sm py-5 md:p-4 font-light font-mono hover:text-white transition-colors duration-300 ease-in-out">
        <p>© 2025 Rafael Feliciano. All rights reserved.</p>
      </footer>
    </div>
  );
}
