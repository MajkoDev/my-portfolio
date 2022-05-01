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
import vsc from "../../public/icons/icon-vsc.jpg";
import visual from "../../public/icons/visual.svg";
import figma from "../../public/icons/figma_logo_icon.svg";

const SectionSkills = ({ skills }) => {
  const techs = skills.skills;
  console.log(techs);

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
        id='skills'
        align={{ base: "center", lg: "start" }}
        direction={{ base: "column", lg: "row" }}
        pb='50px'>
        <SkillTitle software='Technologie' />

        <Wrap justify='center' align='center'>
          <SoftwareCard icon={visual} />
          <SoftwareCard icon={figma} />
        </Wrap>
      </Stack>

      {/* SECTION OF SKILLS */}
      <Stack
        display='flex'
        id='languages'
        align={{ base: "center", lg: "start" }}
        direction={{ base: "column", lg: "row" }}
        pb='50px'>
        <SkillTitle software='Schopnosti' />

        <Wrap justify='center' align='center'>
          
            {techs.map((tech, i) => (
              <SkillCard
              key={i}
              id={tech.idNumber}
              title={tech.title}
              description={tech.description.markdown}
            />
            ))}
          
          
          

          {/* <SkillCard
            id='2'
            title='dizajnovanie.'
            description='viem Css a hneď ako som objavil Sass, zamiloval som si ho. využil som Tailwind Css, Chakra Ui, Bootstrap 5… čoskoro pridám aj Material Ui. pri práci s Reactom som použil Styled-Comp aj Css-in-Js. mal by som začať využívať Storybook viacej.'
          />
          <SkillCard
            id='3'
            title='Front-End.'
            description='venujem sa Reactu a jeho ekosystemu. potom ako sa človek naučí základy (hooks, context, router), vzdeláva sa podľa potreby. tvoril som projekty pomocou Gatsby a Next.js.'
          /> */}
        </Wrap>
      </Stack>
    </Stack>
  );
};

export default SectionSkills;

// const client = new ApolloClient({
//   uri: "https://api-eu-west-2.graphcms.com/v2/cl2ghbbmv33qh01z629r9erpf/master",
//   cache: new InMemoryCache(),
// });

// export async function getServerSideProps() {
//   const { data: skills } = await client.query({
//     query: gql`
//       query Skills {
//         skills {
//           title
//           description {
//             markdown
//           }
//           idNumber
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       skills: data.skills,
//     },
//   };
// }
