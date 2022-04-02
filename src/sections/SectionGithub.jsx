import {
  Center,
  Container,
  Box,
  Link,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";

// Components
import CardGithub from "../components/cards/CardGithub";

// Elements
import SectionTitle from "../elements/SectionTitle";
import GithubLink from "../elements/GithubLink";

const SectionGithub = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='github.'
        subtitle='Posledné projekty a repozitoriá.'
      />
      <Stack pl={{base: '0', lg: '100px'}}>

      <Wrap spacing='20px' justify='center'>
        <CardGithub />
        <CardGithub />
        <CardGithub />
        <CardGithub />
      </Wrap>

      <Center>
        <GithubLink />
      </Center>
      </Stack>
    </Stack>
  );
};

export default SectionGithub;
