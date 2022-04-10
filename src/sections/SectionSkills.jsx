import {
  Container,
  VStack,
  Wrap,
  WrapItem,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

// Elements
// = TitleSection TitleSkill
import SectionTitle from "../elements/SectionTitle";
import SkillTitle from "../ABOUT/SkillTitle";

// Card Components
// = SoftwareCard, SkillCard
import SoftwareCard from "../ABOUT/SoftwareCard";
import SkillCard from "../ABOUT/SkillCard";

const SectionSkills = () => {
  return (
    <Stack h='full' w='full'>
      {/* SECTION TITLE */}
      <SectionTitle
        title='Schopnosti.'
        subtitle='vedomosti, technologie, jazyky, nástroje'
      />

      {/* SECTION OF SOFTWARE */}

      <Stack
        display='flex'
        align={{ base: "center", lg: "start" }}
        direction={{ base: "column", lg: "row" }}
        pb='70px'
        // bg='gray.200'
        // _hover={{ bg: "gray.300" }}
      >
        <SkillTitle software='Technologie' />

        <Wrap justify='center' align='center'>
          <WrapItem>
            <SoftwareCard />
          </WrapItem>
          <WrapItem>
            <SoftwareCard />
          </WrapItem>
        </Wrap>
      </Stack>

      {/* SECTION OF SKILLS */}
      <Stack
        display='flex'
        align={{ base: "center", lg: "start" }}
        direction={{ base: "column", lg: "row" }}
        pb='70px'
        bg='gray.100'
        _hover={{ bg: "gray.200" }}>
        <SkillTitle software='Schopnosti' />

        <Wrap justify='center' align='center'>
          <WrapItem>
            <SkillCard />
          </WrapItem>
          <WrapItem>
            <SkillCard />
          </WrapItem>
        </Wrap>
      </Stack>
    </Stack>
  );
};

export default SectionSkills;
