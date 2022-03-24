import {
  Container,
  Heading,
  Link,
  Text,
  Flex,
  Spacer,
  HStack,
  WrapItem, useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiCodesandbox, FiGithub } from "react-icons/fi";



const CardGithub = () => {

  const colorTitle = useColorModeValue("gray.700", "gray.200");

  return (
    <WrapItem>
      <Container
        border='1px'
        borderColor='gray.500'
        color={colorTitle}
        rounded='md'
        p='3'
        maxW='320px'>
        <Flex justify='center' align='center' mb='2' mr='2'>
          <Heading size='sm'>Note Taking App</Heading>
          <Spacer />

          <NextLink href='/' passHref>
            <Link fontWeight='600' fontSize='xs' >
              <HStack>
                <FiCodesandbox m='2' />
                <Text>CodeSandBox</Text>
              </HStack>
            </Link>
          </NextLink>
        </Flex>

        <Text fontSize='xs' mb='5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa amet
          voluptatem libero.
        </Text>

        <HStack mr='2'>
          <Text fontSize='xs' fontWeight='semibold'>
            React Tailwind Firebase
          </Text>
          <Spacer />
          <NextLink href='/' passHref>
            <Link fontWeight='600' fontSize='md'>
              <FiGithub />{" "}
            </Link>
          </NextLink>
        </HStack>
      </Container>
    </WrapItem>
  );
};

export default CardGithub;
