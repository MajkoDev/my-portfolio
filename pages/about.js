import Head from "next/head";
import { Stack } from "@chakra-ui/react";
// Sections
import SectionAbout from "../src/sections/SectionAbout";
import SectionSkills from "../src/sections/SectionSkills";

const About = () => {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - O mne</title>
      </Head>
      <SectionAbout />
      <SectionSkills />
    </Stack>
  );
};

export default About;
