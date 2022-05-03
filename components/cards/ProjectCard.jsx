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
import Image from "next/image";
import mac from "../../public/images/mac.jpg";
// Framer Motion
import { motion } from "framer-motion";

const ProjectCard = ({ title, subtitle, description, link, image }) => {
  return (
    <WrapItem>
      <motion.div whileHover={{ scale: 1.03 }} transition={{ ease: "easeOut" }}>
        <Box
          h={{ base: "400px", md: "264px" }}
          w={{ base: "md", md: "2xl" }}
          rounded='md'
          mb='10'
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
              px='4'
              py={{ base: "2", md: "6" }}
              w={{ base: "full", md: "55%" }}
              h={{ base: "160", md: "264px" }}>
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
                  <Link
                    href={link}
                    fontSize={{ base: "sm", md: "sm" }}
                    fontWeight={600}
                    m='2'>
                    Navštív stránku
                  </Link>
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