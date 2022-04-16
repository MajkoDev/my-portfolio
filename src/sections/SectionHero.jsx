import {
  Heading,
  Link,
  Flex, HStack,
  Box,
  AspectRatio,
  Stack,
  Text,
} from "@chakra-ui/react";
import avatar from "../../public/images/avatar.gif";
import NextImage from "next/image";
import {BiCopy} from "react-icons/bi"
import EmailCopy from "../elements/EmailCopy"

const SectionHero = () => {
  return (
    <Flex
      h='78vh'
      w='full'
      px={4}
      flexDirection={{ base: " column", md: "row" }}
      alignItems='center'
      justifyContent='center'>
      <Stack my='10' direction='column'>
        <Text fontSize={{ base: "3xl", md: "4xl" }} mb='-5' w='100%'>
          Volám sa,
        </Text>
        <Heading fontSize={{ base: "6xl", md: "7xl" }}>Marian.</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={300}>
          <strong> front-end (samouk) developer </strong> zo západného
          Slovenska. <br /> nadšenec pre <strong>React</strong>, príležitostne
          sa venujem dizajnu.
        </Text>

        
        <EmailCopy />

 
       
      </Stack>

      <AspectRatio
        as='figure'
        ml='8'
        flexShrink={0}
        w={{ base: 60, md: 80 }}
        h={{ base: 60, md: 80 }}
        ratio={1}>
        <Box overflow='hidden' rounded='full'>
          <NextImage
            src={avatar}
            alt='Picture of the author'
            width={900}
            height={900}
          />
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default SectionHero;
