import { Stack, VStack } from "@chakra-ui/react";

// Components
import ProjectCard from "../components/cards/ProjectCard";
import ProjectCardTwo from "../components/cards/ProjectCardTwo";
// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionProjects = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />

      <VStack spacing='24px'>
        <ProjectCard />
        <ProjectCardTwo />
      </VStack>
    </Stack>
  );
};

export default SectionProjects;
