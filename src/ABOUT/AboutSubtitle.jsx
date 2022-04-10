import { Text, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Subtitle = styled(Text)`
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
`;

const AboutSubtitle = ({ title, titleAlignment }) => {
  return (
    <Stack align={titleAlignment} mz='4'>
      <Text fontSize={{ base: "xl", md: "2xl" }}>
        <Subtitle>{title}</Subtitle>
      </Text>
    </Stack>
  );
};

export default AboutSubtitle;
