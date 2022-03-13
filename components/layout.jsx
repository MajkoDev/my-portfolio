import { VStack } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <VStack spacing={0}>{children}</VStack>
    </>
  );
};

export default Layout;
