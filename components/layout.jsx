import { Container, VStack } from "@chakra-ui/react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Container maxW='container.md' padding={0}>
      <Header />
      <VStack spacing={0}>{children}</VStack>
    </Container>
  );
};

export default Layout;
