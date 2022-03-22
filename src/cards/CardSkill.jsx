import { Box, Container, Heading, Text } from "@chakra-ui/react";

import NextImage from "next/image";
import IconHtml from "../../public/icons/icon_html.png";

const CardSkill = ({ title, description }) => {
  return (
    <Box p={2}>
      <Container rounded='md' borderWidth='3px'  p='6' w={{ base: "sm", md: "lg" }}>
        
        <Box boxSize='100px' objectFit='cover'>
          <NextImage src={IconHtml} />
        </Box>
        <Heading fontSize={{ base: "md", md: "lg" }} mb={3}>
          {title}
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight={300} mb={3}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Text>
      </Container>
    </Box>
  );
};

export default CardSkill;
