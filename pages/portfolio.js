import { Stack, Heading, Text } from "@chakra-ui/react";

// Sections
import SectionGithub from "../src/sections/SectionGithub";
import SectionProjects from "../src/sections/SectionProjects";

const Portfolio = () => {
  return (
    <Stack h='full' w='full'>
      <Stack
        mt={10}
        mb={{ base: "4", md: "10" }}
        alignItems={{ base: "center", md: "start" }}>
        <Heading fontSize='4xl'>Portfolio a Projekty</Heading>
        <Text fontSize='lg'>Čo som naposledy vytvoril?</Text>
      </Stack>

      <SectionProjects />
      <SectionGithub />
    </Stack>
  );
};

export default Portfolio;
