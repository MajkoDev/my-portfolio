import { Container, Heading, Stack, Text } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import SectionText from "../elements/SectionText";
import SkillTitle from "../ABOUT/SkillTitle";
import SoftwareCard from "../ABOUT/SoftwareCard";

const SectionSkills = () => {
  return (
    <Stack h='full' w='full'>
      {/* TITLE */}
      <SectionTitle
        title='Schopnosti.'
        subtitle='vedomosti, technologie, jazyky, nástroje'
      />

      {/* LAYOUT */}

      <Heading fontSize='xl'>Technologies</Heading>
      <Text fontSize='md'>Visual Studio Code</Text>
      <Text fontSize='md'>Figma</Text>


      <Stack
        w='full'
        display='flex'
        direction={{ base: "column", md: "row" }}
        minH='200px'
        bg='gray.100'>
        <SkillTitle software='technologie' />
        {/* <SoftwareCard /> */}

        <Container>
          <SoftwareCard />
          
        </Container>
      </Stack>




      <Container>
        <Heading fontSize='lg'>základy web vývoja.</Heading>
      </Container>

      {/* CARDS: 1-4 */}
      <SectionText
        title='nonoe'
        description='Technologie, jazyky, nástroje, Technologie, jazyky, nástroje, Technologie, jazyky, nástroje,'
      />
    </Stack>
  );
};

export default SectionSkills;
