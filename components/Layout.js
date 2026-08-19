import Head from "next/head";
import Navigation from "./Navigation";
import CustomCursor from "./CustomCursor";
import Background from "./Background";

export default function Layout({ children }) {
  return (
    <div className="relative flex min-h-[100svh] flex-col">
      <Head>
        <title>Rafael Feliciano | Portfolio</title>
        <meta
          name="description"
          content="Rafael Feliciano's portfolio - Web Developer & UI/UX Designer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Background />

      <CustomCursor />

      <Navigation />

      <main className="relative z-10 flex flex-1 flex-col pt-[68px]">
        {children}
      </main>

      <footer className="relative z-10 shrink-0 py-4 text-center text-sm font-light text-gray-400 transition-colors duration-300 ease-in-out hover:text-blue-300">
        <p>
          © {new Date().getFullYear()} Rafael Feliciano. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
