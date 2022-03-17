import { Stack } from "@chakra-ui/react";

// Sections
import SectionGithub from "../src/sections/SectionGithub";
import SectionProjects from "../src/sections/SectionProjects";

const Portfolio = () => {
  return (
    <Stack h='full' w='full'>
      
      <SectionProjects />
      <SectionGithub />
    </Stack>
  );
};

export default Portfolio;
