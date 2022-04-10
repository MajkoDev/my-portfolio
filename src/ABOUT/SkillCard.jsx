import { Flex, WrapItem, Stack, Box, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

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
  return (
    <WrapItem>
      <Box
        rounded='lg'
        p='3'
        m='3'
        w={{ base: "md", md: "lg", lg: "2xl" }}
        bg='white'
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
    </WrapItem>
  );
};

export default SkillCard;
