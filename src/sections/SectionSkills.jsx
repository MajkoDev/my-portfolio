import { Wrap, Stack } from "@chakra-ui/react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Elements
// = TitleSection TitleSkill
import SectionTitle from "../elements/SectionTitle";
import SkillTitle from "../ABOUT/SkillTitle";

// Card Components
// = SoftwareCard, SkillCard
import SoftwareCard from "../ABOUT/SoftwareCard";
import SkillCard from "../ABOUT/SkillCard";

// images
import visual from "../../public/prototype/visual-svgrepo.svg";
import figma from "../../public/prototype/figma-svgrepo.svg";

const SectionSkills = ({ skills, softwares }) => {
  const abilities = skills.skills;

  const technologies = softwares.softwares;

  console.log(technologies);

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
