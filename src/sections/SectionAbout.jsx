import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import SectionText from "../elements/SectionText";

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
        {/* <SectionText title={data.title} description={data.description} /> */}

        <Container borderWidth='1px' borderRadius='md' p='3'>
          <Heading  >kto som?</Heading>
          <Text >
            venujem sa web vývoju. <br />
            tvorím zaujímavé a živé veci na internet. <br />
            chcem preskočiť od záujmu k povolaniu.
          </Text>
        </Container>

      </Flex>
    </Stack>
  );
};

export default SectionAbout;
