import { Text, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Subtitle = styled(Text)`
  background: linear-gradient(276.62deg, #e72e0b -20%, #2c16b5 120.8%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
 `;

const AboutSubtitle = ({ title, titleAlignment }) => {
  return (
    <Stack align={titleAlignment} mz='4'>
      <Text fontSize={{ base: "xl", md: "2xl" }} >
        <Subtitle>{title}</Subtitle>
      </Text>
    </Stack>
  );
};

export default AboutSubtitle;
