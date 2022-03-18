import {
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionAbout = () => {
  const data = {
    title: "Paragraphs Something",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam animi quibusdam odio amet deleniti quisquam molestiae corrupti quaerat nulla ab nostrum, nisi id consequuntur velit cumque atque reiciendis, rem, possimus doloremque ipsa! Nemo obcaecati harum possimus consequuntur voluptatibus repudiandae at vitae porro cupiditate beatae.",
  };

  return (
    <Stack h='full' w='full'>
      <SectionTitle title='o mne.' subtitle='Čo o sebe prezradím?' />
      <Flex direction='column' align={{ base: "center", md: "end" }}>

        <Container w={{ base: "30em", md: "62em" }} p='6' mx='4'>
          <Heading fontSize={{ base: "lg", md: "2xl" }} mb={3}>
            {data.title}
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>{data.description}</Text>
        </Container>

        <Container w={{ base: "30em", md: "62em" }} p='6' mx='4'>
          <Heading fontSize={{ base: "lg", md: "2xl" }} mb={3}>
            {data.title}
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>{data.description}</Text>
        </Container>

      </Flex>
    </Stack>
  );
};

export default SectionAbout;
