import {
  Wrap,
  WrapItem,
  Avatar,
  AvatarBadge,
  Stack,
  Text,
} from "@chakra-ui/react";

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
  console.log(skills);
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
          <SkillCard
            id='1'
            title='základy web vývoja.'
            description='poznám Html, Css, Javascript, ťažko si predstaviť pracovať bez nich. neustále sa k nim vraciam a využívam ich, keďže sú základom program. jazykov, s ktorými pracujem. stále si dopĺňam vedomosti z Javascriptu, keďže ho využívam pri práci v Reacte.'
          />
          <SkillCard
            id='2'
            title='dizajnovanie.'
            description='viem Css a hneď ako som objavil Sass, zamiloval som si ho. využil som Tailwind Css, Chakra Ui, Bootstrap 5… čoskoro pridám aj Material Ui. pri práci s Reactom som použil Styled-Comp aj Css-in-Js. mal by som začať využívať Storybook viacej.'
          />
          <SkillCard
            id='3'
            title='Front-End.'
            description='venujem sa Reactu a jeho ekosystemu. potom ako sa človek naučí základy (hooks, context, router), vzdeláva sa podľa potreby. tvoril som projekty pomocou Gatsby a Next.js.'
          />
        </Wrap>
      </Stack>
    </Stack>
  );
};

export default SectionSkills;
