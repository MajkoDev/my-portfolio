import {
  Heading,
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
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion";

const CardGithub = ({ title, link, language, description }) => {
  const colorTitle = useColorModeValue("gray.800", "gray.200");

  return (
    <WrapItem>
      <motion.div whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut" }}>
        <Box
          border='1px'
          borderColor='gray.500'
          boxShadow='md'
          color={colorTitle}
          rounded='md'
          p='3'
          maxH='200px'
          maxW='360px'>
          <NextLink href={link} passHref>
            <a target='_blank' rel='noreferrer'>
              <Stack w='300px' mx='4' alignContent='stretch'>
                <Flex justify='center' align='center' mb='2' mr='2'>
                  <NextLink href={link} passHref>
                    <a target='_blank' rel='noreferrer'>
                      <Heading size='sm'>{title}</Heading>
                    </a>
                  </NextLink>
                  <Spacer />
                </Flex>
                <Text fontSize='xs' mb='5'>
                  {description}
                </Text>
                <Spacer />
                <HStack mr='2'>
                  <Text fontSize='sm' fontWeight='semibold'>
                    {language}
                  </Text>
                  <Spacer />
                  <NextLink href={link} passHref>
                    <a target='_blank' rel='noreferrer'>
                      <Button
                        variant='ghost'
                        borderRadius='60px'
                        size='sm'
                        borderColor='gray.600'>
                        <ImGithub />{" "}
                      </Button>
                    </a>
                  </NextLink>
                </HStack>
              </Stack>
            </a>
          </NextLink>
        </Box>
      </motion.div>
    </WrapItem>
  );
};

export default CardGithub;
