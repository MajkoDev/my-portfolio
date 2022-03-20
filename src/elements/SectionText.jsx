import { Box, Container, Heading, Text } from "@chakra-ui/react";

const SectionTitle = ({ title, description }) => {
  return (
    <Box p={2}> 
      <Container rounded='md' boxShadow='md' p='6' w={{ base: "sm", md: "lg" }}>
        <Heading fontSize={{ base: "md", md: "lg" }} mb={3}>
          {title}
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight={300} mb={3}>
          {description}
        </Text>
      </Container>
    </Box>
  );
};

export default SectionTitle;
