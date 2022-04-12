import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {

  const variants = {
    initial: {
      opacity: 0,
      y: 8,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  }

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
      <motion.div   key={router.route} initial="initial" animate="enter" variants={variants}>
      <Layout>
          <Component {...pageProps} />
      </Layout> </motion.div>   </AnimatePresence>

    </ChakraProvider>
  );
}

export default MyApp;
