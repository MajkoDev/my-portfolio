import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const SoftwareCard = ({ icon }) => {
  const color = useColorModeValue("blue.800", "blue.800");
  const bg = useColorModeValue("white", "gray.200");

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
            <Stack w='100px' mr={{ base: "0", md: "4" }} >
              <Box>
              <Image
                alt='Icon'  
                src={icon}></Image>
              </Box>
              
            </Stack>

            <Stack>
              <Heading
                color={color}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: "lg", md: "lg" }}>
                Visual Studio Code
              </Heading>
              <Text color={color} fontSize={{ base: "sm", md: "sm" }}>
                Visual Studio Code je kódovací editor. Bezplatný. Open-source,
                takže ho môžeme vylepšovať. Jednoduchý a intuitívny. Nehovoriac
                o tom, že ponúka tisíce najrôznejších rozšírení.
              </Text>
            </Stack>
          </Flex>
        </Box>
      </motion.div>
    </WrapItem>
  );
};

export default SoftwareCard;
