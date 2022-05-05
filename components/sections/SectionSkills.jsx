// Chakra Ui
import { Wrap, Stack } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import SkillTitle from "../elements/SkillTitle";

// Card Components
import SoftwareCard from "../cards/SoftwareCard";
import SkillCard from "../cards/SkillCard";

const SectionSkills = ({ skills, softwares }) => {
  const abilities = skills.skills;
  const technologies = softwares.softwares;

  return (
    <Stack h='full' w='full'>
      <SectionTitle title='Schopnosti.' subtitle='vedomosti, technologie, jazyky, nástroje' />

      {/* SECTION OF SOFTWARE */}
      <Stack display='flex' id='skills' align={{ base: "center", lg: "start" }} direction={{ base: "column", lg: "row" }} pb='50px'>
      <SkillTitle software='Technologie' />
        <Wrap justify='center' align='center'>
         {technologies.map((technology, i) => (
            <SoftwareCard key={i} 
              title={technology.title}
              description={technology.description.markdown}
              icon={technology.icon.url} />
          ))} 
        </Wrap>
      </Stack>

      {/* SECTION OF SKILLS */}
      <Stack display='flex' id='languages' align={{ base: "center", lg: "start" }} direction={{ base: "column", lg: "row" }} pb='50px'>
      <SkillTitle software='Schopnosti' />
        <Wrap justify='center' align='center'>
          {abilities.map((ability, i) => (
            <SkillCard
              key={i}
              id={ability.idNumber}
              title={ability.title}
              description={ability.description.markdown}
            />
          ))}
        </Wrap>
      </Stack>
    </Stack>
  );
};

export default SectionSkills;
