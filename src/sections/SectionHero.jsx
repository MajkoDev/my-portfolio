import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

const SectionHero = () => {
  return (
    <Stack
      h='full'
      w='full'
      py={{ base: "12", md: "24" }}
      direction={{ base: "column", md: "row" }}
      alignItems='center'>
      <Stack my='10' direction='column'>
        <Text fontSize='4xl' mb='-5' pl={1}>
          Volám sa,{" "}
        </Text>
        <Heading fontSize='8xl'>Marian.</Heading>
        <Text as='h3' pl={1}>
          <strong> front-end (samouk) developer </strong> zo západného
          Slovenska. <br /> nadšenec pre <strong>React</strong>, príležitostne
          sa venujem dizajnu.
        </Text>
        <Link pl={1}>hellomariandev@gmail.com</Link>
      </Stack>
      <Image
        src='https://bit.ly/dan-abramov'
        boxSize='250px'
        borderRadius='full'
        alt='Profile'
      />
    </Stack>
  );
};

export default SectionHero;
