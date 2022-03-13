import {
  Stack,
  VStack,
  Heading,
  HStack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <Stack
        as='section'
      alignItems='center'
      w='full'
      spacing={12}
      direction={{ base: "column-reverse", md: "row" }}>

      <VStack alignItems='flex-start' w='full' spacing={3}>

          <Heading as="h1" size="2xl">Hi, I am Marian.</Heading>

          <Text as="h2" lineHeight="175%">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nemo
            nostrum aliquam adipisci nisi optio{" "}
            <strong>repellat veritatis</strong> repudiandae saepe excepturi
            magni dolor, quae libero cum!
          </Text>

          <Image
            src='https://bit.ly/dan-abramov'
            boxSize='250px'
            borderRadius='full'
            alt='Profile'
          />


      </VStack>
    </Stack>
  );
};

export default IndexPage;
