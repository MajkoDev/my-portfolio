import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const SelectTitle = styled(Heading)`
  background: linear-gradient(90deg, #e70b9c -20.91%, #2c16b5 122.73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;

`;

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <Stack align={{ base: "center", md: "start" }} my={4}>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} >
          <SelectTitle>{title}</SelectTitle>{" "}
        </Heading>
        <Text as='i' fontSize='md'>
          {subtitle}
        </Text>
      </Stack>
      <Box pb={6}>
        <Divider />
      </Box>
    </>
  );
};

export default SectionTitle;
