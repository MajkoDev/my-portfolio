import {
  Container,
  Heading,
  Link,
  Text,
  Button,
  Flex,
  Box,
  Spacer,
  HStack,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiCodesandbox, FiGithub } from "react-icons/fi";

const CardGithub = () => {
  const colorTitle = useColorModeValue("gray.800", "gray.200");

  return (
    <WrapItem>
      <Box
        border='1px'
        borderColor='gray.500'
        color={colorTitle}
        rounded='md'
        p='3'
        minW='280px'
        maxW='340px'>
        <Flex justify='center' align='center' mb='2' mr='2'>
          <Heading size='sm'>Note Taking App</Heading>
          <Spacer />

          <NextLink href='/' passHref>
            <Link fontWeight='600' fontSize='xs'>
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

          <Button
            variant='ghost'
            borderRadius='60px'
            size='sm'
            borderColor='gray.600'>
            <NextLink href='/' passHref>
              <Link fontWeight='600' fontSize='md'>
                <FiGithub />{" "}
              </Link>
            </NextLink>
          </Button>
        </HStack>
      </Box>
    </WrapItem>
  );
};

export default CardGithub;
