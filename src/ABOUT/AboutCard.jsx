import { Box, Container, Heading, Text } from "@chakra-ui/react";

import AboutSubtitle from "../ABOUT/AboutSubtitle";

const AboutCard = ({ title, description }) => {
  return (
    <Box>
      <Container maxW='container.md' mb='6'>
        <AboutSubtitle title={title} />
        <Text color='gray.700' fontWeight={500}  fontSize={{ base: "md", md: "lg" }}>
          {description}
        </Text>
      </Container>
    </Box>
  );
};

export default AboutCard;
