import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-black">
      <Head>
        <title>Rafael Feliciano | Portfolio</title>
        <meta
          name="description"
          content="Rafael Feliciano's portfolio - Web Developer & UI/UX Designer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="relative z-10">{children}</main>

      <footer className="absolute bottom-0 w-full text-center text-gray-400 text-sm py-5 font-light transition-colors duration-300 ease-in-out hover:text-blue-300">
        <p>
          © {new Date().getFullYear()} Rafael Feliciano. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
