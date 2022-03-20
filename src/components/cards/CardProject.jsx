import { Container, Box, Heading, Stack, Text, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import mac from "../../../public/images/mac.jpg";

const CardExample = () => {
  return (
    <>
      <Container
        minW='250px'
        maxW='350px'
        w='full'
        m={2}
        boxShadow='2xl'
        rounded='md'
        p={6}
        overflow='hidden'>
        <Box h='220px' bg='gray.100' mt='-6 ' mx='-6' mb='6' pos={"relative"}>
          <Image
            alt='Project Image'
            src={mac}
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </Box>

        <Stack>
          <Text
            color='green.600'
            textTransform='uppercase'
            fontWeight={800}
            fontSize='sm'
            letterSpacing={1.1}>
            Portfolio
          </Text>

          <Heading fontSize='2xl'>MajkoDev_ front-end developer</Heading>
          <Text fontSize='sm' fontWeight={600}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>
      </Container>



      <Container
        h={{ base: "400px", md: "264px" }}
        w={{ base: "md", md: "xl" }}
        bg='blue.200'
        p='0'
        rounded='md'
        boxShadow='2xl'
        overflow='hidden'>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box
            w={{ base: "full", md: "45%" }}
            h={{ base: "240", md: "264px" }}
            position='relative'>
            <Image
              alt='Project Image'
              src={mac}
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </Box>

          <Box
            bg='blue.100' pl='6' pt={{base: '2', md: '6'}}
            w={{ base: "full", md: "55%" }}
            h={{ base: "160", md: "264px" }}>
              <Text color='green.600' mt='1'
            textTransform='uppercase' fontSize={{base: 'xs', md: 'sm' }} fontWeight={800} >Portfolio</Text>
            <Heading mt='2' fontSize={{base: 'lg', md: 'xl' }}>MajkoDev_ front-end developer</Heading>
            <Text fontSize={{base: 'xs', md: 'sm' }} fontWeight={400} mt='1' mr='4' >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <Link fontSize={{base: 'xs', md: 'sm' }} fontWeight={800} mt='1' >View Website</Link>
            </Box>
        </Flex>
      </Container>
    </>
  );
};

export default CardExample;
