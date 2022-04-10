// Chakra Ui
import { Stack, Wrap } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

// Components
import ProjectCardTwo from "../components/cards/ProjectCardTwo";

const SectionProjects = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />

      <Wrap spacing='24px' w='full' justify='center'>
        <ProjectCardTwo />
        <ProjectCardTwo />
      </Wrap>
    </Stack>
  );
};

export default SectionProjects;
