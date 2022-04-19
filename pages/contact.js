import Head from "next/head";
import { Stack } from "@chakra-ui/react";

// Sections
import SectionContact from "../src/sections/SectionContact";

const Contact = () => {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - Kontakt</title>
      </Head>
      <SectionContact />
    </Stack>
  );
};

export default Contact;
