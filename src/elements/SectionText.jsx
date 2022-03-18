import { Container, Heading, Text } from "@chakra-ui/react";

const SectionTitle = ({ title, description }) => {
  return (
    <Container w={{ base: "30em", md: "62em" }} p='6' mx='4'>
      <Heading fontSize={{ base: "lg", md: "2xl" }} mb={3}>
        {title}
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
    </Container>
  );
};

export default SectionTitle;
