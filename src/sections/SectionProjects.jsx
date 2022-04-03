import { Stack, VStack } from "@chakra-ui/react";

// Components
import ProjectCard from "../components/cards/ProjectCard";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionProjects = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />

      <VStack>
        <ProjectCard />
      </VStack>
    </Stack>
  );
};

export default SectionProjects;
