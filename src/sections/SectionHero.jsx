import {
  Heading,
  Image,
  Link,
  Box,
  AspectRatio,
  Stack,
  Text,
} from "@chakra-ui/react";
import avatar from "../../public/images/avatar.gif";
import Mac from "../../public/images/mac.jpg";
import NextImage from "next/image";

const SectionHero = () => {
  return (
    <Stack
      h='78vh'
      w='full'
      px={4}
      direction={{ base: "column", md: "row" }}
      alignItems='center'
      justify='center'>

      <Stack my='10' w='70%' direction='column'>
        <Text fontSize={{ base: "2xl", md: "4xl" }} mb='-5'>
          Volám sa,
        </Text>
        <Heading fontSize={{ base: "5xl", md: "7xl" }}>Marian.</Heading>
        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight={300}>
          <strong> front-end (samouk) developer </strong> zo západného
          Slovenska. <br /> nadšenec pre <strong>React</strong>, príležitostne
          sa venujem dizajnu.
        </Text>

        <Link fontSize={{ base: "sm", md: "lg" }} fontWeight={500}>
          hellomariandev@gmail.com
        </Link>
      </Stack>

      {/* 
      <Image
        src='https://bit.ly/dan-abramov'
        boxSize='250px'
        borderRadius='full'
        alt='Profile'
      />{" "} */}

        {/* 
            40 44 48 56 60 64 72 80 96

            e02251 0d1068
        */}

      <AspectRatio as='figure' flexShrink={0} w={{base: 60, md: 80}} h={{base: 60, md: 80}} ratio={1}>
        
        <Box overflow='hidden' rounded='full'>
          <NextImage
            src={avatar}
            alt='Picture of the author'
            width={900}
            height={900}
          />
        </Box>
      </AspectRatio>


    </Stack>
  );
};

export default SectionHero;
