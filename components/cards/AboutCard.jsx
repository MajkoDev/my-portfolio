import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

import SubtitleAbout from "../elements/SubtitleAbout";

const AboutCard = ({ title, description, alignment, titleAlignment }) => {
  const color = useColorModeValue("gray.700", "white");

  return (
    <Box>
      <Container maxW='container.md' mb='8'>
        <SubtitleAbout title={title} titleAlignment={titleAlignment}  />
        <Text
          color={color}
          fontWeight={400}
          align={alignment}
          fontSize={{ base: "1rem", md: "1.075rem" }}>
          {description}
        </Text>
      </Container>
    </Box>
  );
};

export default AboutCard;
