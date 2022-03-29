import { Box, Container, Stack, VStack, Wrap } from "@chakra-ui/react";
import CardExample from "../components/cards/CardExample";
import ProjectCard from "../components/cards/ProjectCard";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionProjects = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />
      {/* <Wrap pb='60px' spacing='20px' justify='center'>
        <CardExample />
      </Wrap> */}

      <VStack>
      {/* <Box w='300px' h='100px' bg='red.100' /> */}
{/* 
      <ProjectCard />
      <ProjectCard /> */}


      {/* <ProjectCard />
      <ProjectCard />
        <ProjectCard /> */}
      </VStack>
    </Stack>
  );
};

export default SectionProjects;
