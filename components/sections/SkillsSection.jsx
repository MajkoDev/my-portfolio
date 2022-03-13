import {
  Heading,
  Text,
  Stack,
  Flex,
  Container,
  Image,
  Box,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";

const SkillsSection = () => {
  return (
    <Stack h='full' w='full'>
      <Stack
        mb={{ base: "4", md: "10" }}
        alignItems={{ base: "center", md: "start" }}>
        <Heading fontSize='3xl'>moje schopnosti.</Heading>
        <Text fontSize='lg'>vedomosti, skusenosti</Text>
      </Stack>

      <VStack alignItems={{ base: "center", md: "start" }}>
        <Container
          maxW='sm'
          minH={125}
          border='2px'
          borderColor='blue.300'
          borderRadius={12}
          w={356}
          m={2}
          p={2}>
          <Heading fontSize='md'>základy web vývoja.</Heading>
          <List fontSize='sm'>
            <ListItem>poznám html, css, javascript</ListItem>
            <ListItem>
              stále viac a viac sa učím javascript, <br />
              keďže ho využívam na aplikácie a projekty{" "}
            </ListItem>
          </List>
        </Container>
      </VStack>

      <VStack alignItems={{ base: "center", md: "center" }}>
        <Container
          maxW='sm'
          minH={125}
          border='2px'
          borderColor='blue.300'
          borderRadius={12}
          w={356}
          m={2}
          p={2}>
          <Heading fontSize='md'>dizajnovanie.</Heading>
          <List fontSize='sm'>
            <ListItem>viem Css, milujem Sass</ListItem>
            <ListItem>navrhujem v softwari Figma</ListItem>
            <ListItem>využil som aj bootstrap, tailwind, chakra,…</ListItem>
            <ListItem>pri React skúšam Storybook, Emotion</ListItem>
          </List>
        </Container>
      </VStack>

      <VStack alignItems={{ base: "center", md: "end" }}>
        <Container
          maxW='sm'
          minH={125}
          border='2px'
          borderColor='blue.300'
          borderRadius={12}
          w={356}
          m={2}
          p={2}>
          <Heading fontSize='md'>Front-End.</Heading>
          <List fontSize='sm'>
            <ListItem>venujem sa Reactu a jeho ekosystem</ListItem>
            <ListItem>poznám základy, kontext, hooks, router</ListItem>
            <ListItem>pracoval som s Next.js a aj Gatsby</ListItem>
          </List>
        </Container>
      </VStack>
    </Stack>
  );
};

export default SkillsSection;
