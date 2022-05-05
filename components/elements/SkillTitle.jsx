import { Box, Heading } from "@chakra-ui/react";

const SkillTitle = ({ software }) => {
  return (
    <Box
      transform={{ base: "rotate(0deg)", lg: "rotate(-25deg)" }}
      mt='12'
      mx='2'>
      <Heading fontSize={{ base: "2xl", lg: "3xl" }}>{software}</Heading>
    </Box>
  );
};

export default SkillTitle;
