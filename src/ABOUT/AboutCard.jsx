import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

import AboutSubtitle from "../ABOUT/AboutSubtitle";

const AboutCard = ({ title, description, alignment, titleAlignment }) => {
  const color = useColorModeValue("gray.700", "white");

  return (
    <Box>
      <Container maxW='container.md' mb='8'>
        <AboutSubtitle title={title} titleAlignment={titleAlignment}  />
        <Text
          color={color}
          fontWeight={400}
          align={alignment}
          fontSize={{ base: "md", md: "md" }}>
          {description}
        </Text>
      </Container>
    </Box>
  );
};

export default AboutCard;
