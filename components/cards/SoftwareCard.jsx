import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
// Next.js
import Image from 'next/image'
// Framer Motion
import { motion } from "framer-motion";

const SoftwareCard = ({ icon, title, description }) => {
  const color = useColorModeValue("blue.800", "blue.800");
  const bg = useColorModeValue("white", "gray.200");
  const responsive = {
    w: "100%",
    h: "auto",
  };

  const loaderProp =({ src }) => {
    return src;
  }

  return (
    <WrapItem>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Box
          rounded='lg'
          p='3'
          m='3'
          w={{ base: "sm", lg: "2xl" }}
          bg={bg}
          boxShadow='lg'>
          <Flex
            align='center'
            direction={{ base: "column", md: "column", lg: "row" }}>
            <Stack w='100px' mr={{ base: "0", md: "4" }}>
              <Box mb={{ base: "4", lg: "0" }}>
                <Image
                  src={icon}
                  loader={loaderProp}
                  width={500} 
                  height={500}
                  alt={`${title} Cover Image`}
                />
              </Box>
            </Stack>

            <Stack>
              <Heading
                color={color}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: "lg", md: "lg" }}>
                {title}
              </Heading>
              <Text color={color} fontSize={{ base: "sm", md: "sm" }}>
                {description}
              </Text>
            </Stack>
          </Flex>
        </Box>
      </motion.div>
    </WrapItem>
  );
};

export default SoftwareCard;
