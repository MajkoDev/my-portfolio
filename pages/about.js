import { Stack } from '@chakra-ui/react'
// Sections
import SectionAbout from "../src/sections/SectionAbout";
import SectionPersonal from "../src/sections/SectionPersonal";
import SectionSkills from "../src/sections/SectionSkills";

import Footer from "../src/components/footer"

const About = () => {
  return (
    <Stack h='full' w='full'>
      <SectionAbout />
      <SectionSkills />
      <SectionPersonal />
      <Footer/>
    </Stack>
  );
};

export default About;
