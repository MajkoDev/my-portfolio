import { Stack } from '@chakra-ui/react'
// Sections
import SectionAbout from "../src/sections/SectionAbout";
import SectionSkills from "../src/sections/SectionSkills";

const About = () => {
  return (
    <Stack h='full' w='full'>
      <SectionAbout />
      
      <SectionSkills />
     </Stack>
  );
};

export default About;

