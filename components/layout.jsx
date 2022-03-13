import { Container, VStack } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Container
        d="flex"
        maxW="container.md"
        minH={{ base: "auto", md: "100vh" }}
        px={{ base: 4, lg: 0 }}
        centerContent
      >
      <Header />
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing={16}>
            {children}
          </VStack>
          <Footer />
        </VStack>
      </Container>
    </>
  );
};

export default Layout;
