import {
  Heading,
  Link,
  Text,
  Button,
  Stack,
  Flex,
  Box,
  Spacer,
  HStack,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiCodesandbox } from "react-icons/fi";
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion"

const CardGithub = (item) => {
  const colorTitle = useColorModeValue("gray.800", "gray.200");

  return (
    <WrapItem>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ ease: "easeOut" }}>
      <Box
        border='1px'
        borderColor='gray.500'
        color={colorTitle}
        rounded='md'
        p='3'
        minH='100px'
        maxW='360px'>
        <NextLink href={item.url} passHref>
          <a target='_blank' rel='noreferrer'>
            <Stack w='300px' mx='4' alignContent='stretch'>
              <Flex justify='center' align='center' mb='2' mr='2'>
                <NextLink href={item.url} passHref>
                  <a target='_blank' rel='noreferrer'>
                    <Heading size='sm'>{item.name}</Heading>
                  </a>
                </NextLink>

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
                {item.description}
              </Text>

              <HStack mr='2'>
                <Text fontSize='xs' fontWeight='semibold'>
                  React Tailwind Firebase
                </Text>
                <Spacer />

                {/* <NextLink href={item.url} passHref>
              <a target='_blank' rel='noreferrer'>
                <Button
                  variant='ghost'
                  borderRadius='60px'
                  size='sm'
                  borderColor='gray.600'>
                  <ImGithub />{" "}
                </Button>
              </a>
            </NextLink> */}
              </HStack>
            </Stack>
          </a>
        </NextLink>
      </Box></motion.div>
    </WrapItem>
  );
};

export default CardGithub;
