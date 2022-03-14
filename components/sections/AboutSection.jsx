import {
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Stack h='full' w='full'>
      <Stack
        mb={{ base: "4", md: "10" }}
        alignItems={{ base: "center", md: "start" }}>
        <Heading fontSize='5xl'>O mne.</Heading>
        <Text fontSize='lg'>Čo som schopný o sebe prezradiť?</Text>
      </Stack>

      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "start" }}
        justify='center'
        w={{ base: "100%", md: "100%" }}>
        <Container
          maxW='sm'
          border='4px'
          borderColor='gray.200'
          borderRadius={12}
          p={3}
          m={1}>
          <Heading fontSize='2xl' mb={2}>
            kto som?
          </Heading>
          <Text fontSize='sm'>
            venujem sa web vývoju. <br />
            tvorím zaujímavé a živé veci na internet. <br />
            chcem preskočiť od záujmu k povolaniu.
          </Text>
        </Container>

        <Container
          maxW='sm'
          border='4px'
          borderColor='gray.200'
          borderRadius={12}
          p={3}
          m={1}>
          <Heading fontSize='2xl' mb={2}>
            čo momentálne?
          </Heading>
          <Text fontSize='sm'>
            momentálne tvorím projekty pre môj Github. <br /> experimentujem s
            reactom and prehlbujem znalosti javascriptu. <br /> tvorím stránky,
            ktoré chcem ponúknuť známym pre využitie.
          </Text>
        </Container>
      </Flex>

      <Stack w='full' align={{ base: "center", md: "end" }}>
        <Link mt={8}>Zisti viac o mne</Link>
      </Stack>
    </Stack>
  );
};

export default AboutSection;
