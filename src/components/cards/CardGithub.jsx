import {
  Container,
  Heading,
  Link,
  Text,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";

const CardGithub = () => {
  return (
    <Container
      border='1px'
      borderColor='gray.500'
      color='gray.700'
      rounded='md'
      p={3}
      maxW='360px'>
      <Flex justify='center' align='center' mb={2}>
        <Heading size='sm'>Note Taking App</Heading>
        <Spacer />

        <NextLink href='https://github.com/MajkoDev' passHref>
          <Link fontWeight='600' fontSize='xs'>
            CodeSandBox
          </Link>
        </NextLink>
      </Flex>

      <Text fontSize='xs' mb={2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa amet
        voluptatem libero.
      </Text>
      <Text fontSize='xs'>React Tailwind Firebase</Text>
    </Container>
  );
};

export default CardGithub;
