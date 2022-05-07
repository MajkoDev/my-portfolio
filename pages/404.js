import Head from "next/head";
// Chakra Ui
import { Stack, Center, Heading } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - O mne</title>
      </Head>
      <Center minH='50vh'>
        <Heading fontSize='28px'>Vôbec neviem, čo máš na mysli.</Heading>
      </Center>
    </Stack>
  );
}
