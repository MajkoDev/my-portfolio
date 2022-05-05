import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const SelectTitle = styled(Heading)`
  background: linear-gradient(90deg, #e70b9c -20.91%, #2c16b5 122.73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 900;
`;

const SectionTitle = ({ title, subtitle }) => {
  return (
    <Stack align={{ base: "end", md: "start" }} mt='4' mb='8'>
      <Heading fontSize={{ base: "xl", md: "5xl" }}>
        <SelectTitle>{title}</SelectTitle>{" "}
      </Heading>
      <Divider />
      <Text align={{ base: "end", md: "start" }} as='i' fontSize='md'>
        {subtitle}
      </Text>
    </Stack>
  );
};

export default SectionTitle;
