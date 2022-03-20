import { Box, Container, Heading, Text } from "@chakra-ui/react";

const SectionTitle = ({ title, description }) => {
  return (
    <Box p={2}> 
      <Container rounded='md' boxShadow='md' p='6' w={{ base: "sm", md: "lg" }}>
        <Heading fontSize={{ base: "md", md: "lg" }} mb={3}>
          {title}
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} mb={3}>
          poznám Html, Css, Javascript. ťažko si predstaviť pracovať bez nich.
          neustále sa k nim vraciam a využívam ich, keďže sú základom program.
          jazykov, s ktorými pracujem.
        </Text>
      </Container>
    </Box>
  );
};

export default SectionTitle;
