import {
  Flex,
  WrapItem,
  Stack,
  Box,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Number = styled(Heading)`
  background: linear-gradient(
    151.59deg,
    rgba(17, 102, 26, 0.7) 20.92%,
    rgba(25, 166, 226, 0.7) 84.59%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
`;

const SkillCard = ({ id, title, description }) => {
  const color = useColorModeValue("blue.800", "blue.800");
  const bg = useColorModeValue("white", "gray.50");

  return (
    <WrapItem>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Box
          rounded='lg'
          p='3'
          m='3'
          color={color}
          w={{ base: "md", md: "lg", lg: "2xl" }}
          bg={bg}
          boxShadow='lg'>
          <Flex align='center' direction='row'>
            <Stack mx='4' align='start'>
              <Number fontWeight={900} fontSize='8xl'>
                {id}
              </Number>
            </Stack>

            <Stack>
              <Heading
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: "lg", md: "lg" }}>
                {title}
              </Heading>
              <Text fontSize={{ base: "sm", md: "sm" }}>{description}</Text>
            </Stack>
          </Flex>
        </Box>
      </motion.div>
    </WrapItem>
  );
  
};

export default SkillCard;
