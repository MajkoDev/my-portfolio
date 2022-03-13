import { Heading, Text, Stack, Flex, Container } from "@chakra-ui/react";

const SkillsSection = () => {
  return (
    <Stack h='full' w='full'>
      <Stack
        mb={{ base: "4", md: "10" }}
        alignItems={{ base: "center", md: "start" }}>
        <Heading fontSize='3xl'>moje schopnosti.</Heading>
        <Text fontSize='lg'>vedomosti, skusenosti</Text>
      </Stack>

      <Flex wrap='auto'
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "start" }}
        justify='center'
        w={{ base: "100%", md: "100%" }}>

            <Container bg='blue.100' w={356} h={125} m={2}>
            </Container>

            <Container bg='blue.100' w={356} h='full' m={2}>
            </Container>

            <Container bg='blue.100' w={356} h={125} m={2}>
            </Container>
        </Flex>
    </Stack>
  );
};

export default SkillsSection;
