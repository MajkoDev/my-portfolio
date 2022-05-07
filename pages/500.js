import Head from "next/head";
import { Stack, Center, Heading } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - O mne</title>
      </Head>
      <Center minH='50vh'>
        <Heading fontSize='28px'>Kde udělali soudruzi z NDR chybu?</Heading>
      </Center>
    </Stack>
  );
}
