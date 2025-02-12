import Layout from "../components/Layout";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const AnimatedBackground = dynamic(
  () => import("../components/AnimatedBackground"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen bg-[url('/images/background.webp')] bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <AnimatedBackground />
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
