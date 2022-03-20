import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

const SectionHero = () => {
  return (
    <Stack
      h='78vh'
      w='full'
      px={4}
      direction={{ base: "column", md: "row" }}
      alignItems='center'
      justify='center'>
      <Stack my='10' w='80%' direction='column'>
        <Text fontSize={{ base: "2xl", md: "4xl" }} mb='-5'>
          Volám sa,
        </Text>
        <Heading fontSize={{ base: "5xl", md: "7xl" }}>Marian.</Heading>
        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight={300}>
          <strong> front-end (samouk) developer </strong> zo západného
          Slovenska. <br /> nadšenec pre <strong>React</strong>, príležitostne
          sa venujem dizajnu.
        </Text>
        ä
        <Link fontSize={{ base: "sm", md: "lg" }} fontWeight={500}>
          hellomariandev@gmail.com
        </Link>
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
