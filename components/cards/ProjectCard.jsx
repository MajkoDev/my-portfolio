// Chakra Ui
import {
  Box,
  Heading,
  WrapItem,
  Spacer,
  Text,
  Flex,
  Link,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
// Next.js
import Image from 'next/image'
import NextLink from "next/link";
// Framer Motion
import { motion } from "framer-motion";

const ProjectCard = ({ title, subtitle, description, link, image }) => {
  const colorText = useColorModeValue("gray.800", "gray.900");
  const colorBg = useColorModeValue("gray.100", "gray.300");

  const loaderProp =({ src }) => {
    return src;
  }

  return (
    <WrapItem>
      <motion.div whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut" }}>
        <Box
          bg={colorBg}
          h='full'
          w={{ base: "md", md: "2xl" }}
          rounded='lg'
          mb='10'
          pb={{base:'2', md: '0'}}
          boxShadow='2xl'
          overflow='hidden'>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              w={{ base: "full", md: "100%" }}
              h={{ base: "full", md: "100" }}
              position='relative'
              borderColor='gray.400' >
                <Image 
                  src={image.url} 
                  loader={loaderProp}  
                  width={500}
                  height={320} />
              
            </Box>
            <Box
              px='4'
              py={{ base: "2", md: "6" }}
              w={{ base: "full", md: "55%" }}
              h={{ base: "full", md: "264px" }}>
              <Flex
                direction='column'
                h='full'
                justify='space-between'
                align='stretch'>
                <Text
                  color='green.600'
                  mt='1'
                  textTransform='uppercase'
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight={800}>
                  {subtitle}
                </Text>
                <Heading
                  mt='2'
                  color={colorText}
                  fontSize={{ base: "lg", md: "xl" }}>
                  {title}
                </Heading>
                <Text
                  color={colorText}
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight={400}
                  mt='1'
                  mr='4'>
                  {description}
                </Text>
                <Spacer />
                <HStack justify='end'>
                  <NextLink href={link} passHref>
                    <a target='_blank' rel='noreferrer'>
                      <Link
                        color={colorText}
                        fontWeight='semibold'
                        fontSize={{ base: "sm", md: "sm" }}
                        m='2'>
                        Navštív stránku
                      </Link>
                    </a>
                  </NextLink>
                </HStack>
              </Flex>
            </Box>
          </Flex>
        </Box>{" "}
      </motion.div>
    </WrapItem>
  );
};

export default ProjectCard;
