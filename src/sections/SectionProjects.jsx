import { Stack, Wrap } from "@chakra-ui/react";
import CardExample from "../components/cards/CardExample";
import CardProject from "../components/cards/CardProject";

const SectionProjects = () => {
  return (
    <Stack h='full' w='full'>
      <Wrap spacing='20px' justify='center'>
        <CardExample />
        <CardExample />
      </Wrap>
    </Stack>
  );
};

export default SectionProjects;
