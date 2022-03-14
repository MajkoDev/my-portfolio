import { Box, Heading, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const HeroSection = () => {


  return (
    <Stack
      //   h={{ base: "100vh", md: "60vh" }}
      h='full'
      py={{ base: "12", md: "24" }}
      w='full'
      direction={{ base: "column", md: "row" }}
      alignItems='center'>




      <Stack my={10} direction='column'>

        {/* <Heading mb={3} fontSize='5xl'>
          Volám sa, <br /> Marian.{" "}
        </Heading> */}
        <Text fontSize='4xl' mb={0}>Volám sa,</Text>
        <Heading fontSize='7xl' >Marian.</Heading>

        <Text as='h3'>
          <strong> front-end (samouk) developer </strong> zo západného
          Slovenska. <br />
          nadšenec pre React, príležitostne sa venujem dizajnu.
        </Text>

        <Link>hellomariandev@gmail.com</Link>
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

export default HeroSection;
