import { Container, Stack, VStack, Wrap } from "@chakra-ui/react";
import CardExample from "../components/cards/CardExample";
import CardProject from "../components/cards/CardProject";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionProjects = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />
      <Wrap pb='60px' spacing='20px' justify='center'>
        <CardExample />
      </Wrap>

      <VStack>

        <CardProject />
      </VStack>
    </Stack>
  );
};

export default SectionProjects;
