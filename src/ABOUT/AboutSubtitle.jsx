import { Heading, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Subtitle = styled(Heading)`
  background: linear-gradient(276.62deg, #e72e0b -20%, #2c16b5 120.8%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
`;

const AboutSubtitle = ({ title }) => {
  return (
    <Stack align='start' mz='4'>
      <Heading fontSize={{ base: "xl", md: "5xl" }}>
        <Subtitle>{title}</Subtitle>
      </Heading>
    </Stack>
  );
};

export default AboutSubtitle;
