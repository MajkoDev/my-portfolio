import { Stack, Flex } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import SectionText from "../elements/SectionText";
import CardSkill from "../cards/CardSkill";

const SectionSkills = () => {

  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='moje schopnosti.'
        subtitle='Technologie, jazyky, nástroje, '
      />

      <Flex direction='column' align={{ base: "center", md: "end" }}>
        {/* <SectionText title={skills.title} description={skills.description} /> */}
{/* 
        <SectionText
          title='základy web vývoja.'
          description='poznám Html, Css, Javascript. ťažko si predstaviť pracovať bez nich.
          neustále sa k nim vraciam a využívam ich, keďže sú základom program.
          jazykov, s ktorými pracujem.'
        />

        <SectionText
          title='dizajnovanie.'
          description='hneď ako som si vyskušal Sass, tak som ho zbožňoval.
          návrhy projektov tvorím buď na papier alebo vo Figme, často v oboch zároveň.
          pri dizajnovaní som využil Tailwind Css, Chakra Ui, Bootstrap 5. momentálne skúšam Material Ui.
          pri malých projektoch v Reacte, väčšinou používam Styled-Components, alebo Css-in-JS.
          mal by som začať využívať Storybook viacej.'
        />

        <SectionText
          title='Front-End.'
          description='venujem sa Reactu a jeho ekosystem
          poznám základy, kontext, hooks, router
          pracoval som s Next.js a aj Gatsby'
        />

        <CardSkill 
        title='Title'
        description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/> */}

      </Flex>
    </Stack>
  );
};

export default SectionSkills;
