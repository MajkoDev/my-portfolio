import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

import AboutSubtitle from "../ABOUT/AboutSubtitle";

const AboutCard = ({ title, description }) => {
  const color = useColorModeValue("gray.700", "white");

  return (
    <Box>
      <Container maxW='container.md' mb='6'>
        <AboutSubtitle title={title} />
        <Text
          color={color}
          fontWeight={400}
          fontSize={{ base: "md", md: "md" }}>
          {description}
        </Text>
      </Container>
    </Box>
  );
};

export default AboutCard;
