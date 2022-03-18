import {
  Container,
  Heading,
  Link,
  Text,
  Flex,
  Spacer,
  Box,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiCodesandbox } from "react-icons/fi";

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

          <NextLink href='/' passHref>
            <Link fontWeight='600' fontSize='xs'>
              <HStack>
                <FiCodesandbox m={2} />
                <Text>CodeSandBox</Text>
              </HStack>
            </Link>
          </NextLink>
      </Flex>

      <Text fontSize='xs' mb={6}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa amet
        voluptatem libero.
      </Text>
      <Text fontSize='xs' fontWeight='semibold'>
        React Tailwind Firebase
      </Text>
    </Container>
  );
};

export default CardGithub;
