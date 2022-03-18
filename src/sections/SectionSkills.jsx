import { Stack, Flex } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import SectionText from "../elements/SectionText";

const SectionSkills = () => {
  const skills = [
    {
      title: "kto som?",
      description: "poznám html, css, javascript stále viac a viac sa učím javascript, keďže ho využívam na aplikácie a projekty",
    },
    {
      title: "dizajnovanie",
      description: "poznám html, css, javascript stále viac a viac sa učím javascript, keďže ho využívam na aplikácie a projekty",
    },
  ];

  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='moje schopnosti.'
        subtitle='Technologie, jazyky, nástroje, '
      />

      <Flex direction='column' align={{ base: "center", md: "end" }}>
      <SectionText title={skills.title} description={skills.description} />
      </Flex>
    </Stack>
  );
};

export default SectionSkills;
