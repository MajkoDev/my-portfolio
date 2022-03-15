import { Container, Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import mac from "../../../public/images/mac.jpg";

const CardExample = () => {
  return (
    <Container
        minW='250px'
      maxW='350px'
      w='full'
      m={2}
      boxShadow='2xl'
      rounded='md'
      p={6}
      overflow='hidden'>
      <Box h={"220px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
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
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Stack>
    </Container>
  );
};

export default CardExample;
