import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <>
      <Stack align={{ base: "center", md: "start" }} my={4}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }}>{title} </Heading>
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
