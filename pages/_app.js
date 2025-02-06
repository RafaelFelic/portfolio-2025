import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-[url('/images/background.webp')] bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
