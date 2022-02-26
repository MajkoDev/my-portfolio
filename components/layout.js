import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>my Portfolio</title>
        <meta name='description' content='portfolio' />
      </Head>
      <Header />
      <main>{children}</main>

    </>
  );
}
