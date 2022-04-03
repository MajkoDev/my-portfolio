import { Container, VStack } from "@chakra-ui/react";
import Footer from "./footer";
import Footer2 from "./footer2"
import Header from "./navbar/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Container
        d="flex"
        maxW="container.lg"
        minH={{ base: "auto", md: "100vh" }}
        px={{ base: 2, sm: 6 }}
        centerContent
      >
      <Header />
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing={16}>
            {children}
          </VStack>
          <Footer2 />
        </VStack>
      </Container>
    </>
  );
};

export default Layout;
