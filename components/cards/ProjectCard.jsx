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
} from "@chakra-ui/react";
// Next.js
import NextLink from "next/link";
// Framer Motion
import { motion } from "framer-motion";

const ProjectCard = ({ title, subtitle, description, link, image }) => {
  return (
    <WrapItem>
      <motion.div whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut" }}>
        <Box
          bg='gray.100'
          h='full'
          w={{ base: "md", md: "2xl" }}
          rounded='lg'
          mb='10'
          boxShadow='2xl'
          overflow='hidden'>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              w={{ base: "full", md: "100%" }}
              h={{ base: "full", md: "100%" }}
              position='relative'
              borderColor='gray.400'>
              <img alt='Project Image' src={image.url} width='100%' />
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
                <Heading mt='2' fontSize={{ base: "lg", md: "xl" }}>
                  {title}
                </Heading>
                <Text
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