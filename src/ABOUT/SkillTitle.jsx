import { Box, Heading } from "@chakra-ui/react";

const SkillTitle = ({ software }) => {
  return (
    <Box
      transform={{ base: "rotate(0deg)", md: "rotate(-25deg)" }}
      mt='6'
      ml='6'>
      <Heading fontSize={{ base: "2xl", md: "4xl" }}>{software}</Heading>
    </Box>
  );
};

export default SkillTitle;
