import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const CardSkill = () => {
  return (
    <Box>
      <VStack>
        <Stack>
          <Heading>Lorem, ipsum dolor</Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            doloribus ipsa beatae ab, dolorem repudiandae praesentium odio ex
            numquam esse repellat. A quae distinctio esse, omnis corrupti
            facere, vel fugit eligendi dolorum consequuntur provident.
          </Text>
          <Link>Link on Me</Link>
        </Stack>
      </VStack>
    </Box>
  );
};

export default CardSkill;
