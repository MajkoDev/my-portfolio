import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>my Portfolio</title>
        <meta name='description' content='portfolio' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
