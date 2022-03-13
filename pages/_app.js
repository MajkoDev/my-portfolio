import { ChakraProvider } from "@chakra-ui/react";

import '../style.css'
import theme from '../styles/theme'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
