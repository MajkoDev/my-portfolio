import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Stack h='full' w='full'>

      <Stack alignItems={{ base: "center", md: "start" }} mb={{base: '4', md: '12'}}>
        <Heading fontSize='5xl'>O mne.</Heading>
        <Text fontSize='lg'>Čo som schopný o sebe prezradiť?</Text>
      </Stack>

      <Flex direction={{ base: "column", md: "row" }}>

        <Container border='4px' borderColor='gray.200' borderRadius={12} p={3} m={3} > 
          <Heading fontSize='3xl' mb={3}>kto som?</Heading>
          <Text fontSize='md'>
            venujem sa web vývoju. <br />
            tvorím zaujímavé a živé veci na internet. <br />
            chcem preskočiť od záujmu k povolaniu.
          </Text>
        </Container>

        <Container border='4px' borderColor='gray.200' borderRadius={12} p={3} m={3}>
          <Heading fontSize='3xl'>čo momentálne?</Heading>
          <Text fontSize='md'>
            momentálne tvorím projekty pre môj Github. <br /> experimentujem s
            reactom and prehlbujem znalosti javascriptu. <br /> tvorím stránky,
            ktoré chcem ponúknuť známym pre využitie.
          </Text>
        </Container>
      </Flex>
    </Stack>
  );
};

export default AboutSection;
