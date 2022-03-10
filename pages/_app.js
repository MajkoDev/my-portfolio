// import "../styles/globals.css";

// import Layout from "../components/layout";

import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
