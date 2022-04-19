import Head from "next/head";
import { Stack } from "@chakra-ui/react";

// Sections
import SectionHero from "../src/sections/SectionHero";

export default function Home() {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev</title>
      </Head>
      <SectionHero />
    </Stack>
  );
}
