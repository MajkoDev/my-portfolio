import { Flex, Container, Stack, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import vsc from "../../public/icons/icon-vsc.jpg";

const SoftwareCard = () => {
  return (
    <Box
      rounded='lg'
      p='3'
      m='3'
      w={{ base: "sm",  lg: "2xl" }}
      bg='white'
      boxShadow='lg'>
      <Flex
        align='center'
        direction={{ base: "column", md: "column", lg: "row" }}>
        <Stack w='100px' mr={{ base: "0", md: "4" }} align='center'>
          <Box>
            <Image alt='Icon' src={vsc}></Image>
          </Box>
        </Stack>

        <Stack>
          <Heading
            align={{ base: "center", lg: "start" }}
            fontSize={{ base: "lg", md: "lg" }}>
            Visual Studio Code
          </Heading>
          <Text fontSize={{ base: "sm", md: "sm" }}>
            Visual Studio Code je kódovací editor. Bezplatný. Open-source, takže
            ho môžeme vylepšovať. Jednoduchý a intuitívny. Nehovoriac o tom, že
            ponúka tisíce najrôznejších rozšírení.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SoftwareCard;
