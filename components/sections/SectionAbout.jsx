// Chakra Ui
import { Stack, VStack, Flex } from "@chakra-ui/react";
// Components
import AboutCard from "../cards/AboutCard";
import AboutCardSec from "../cards/AboutCardSec";
// Elements
import SectionTitle from "../elements/SectionTitle";


const SectionAbout = ({ abouts }) => {
  const aboutme = abouts.abouts;

  return (
    <Stack h='full' w='full'>
      <SectionTitle title='O mne.' subtitle='Čo o sebe prezradím?' />


      <VStack>
        <AboutCard
          titleAlignment='start'
          title={aboutme[0].title}
          description={aboutme[0].description.text} />
        <AboutCardSec />
      </VStack>

      <VStack>
        <AboutCard
          titleAlignment='start'
          title={aboutme[1].title}
          description={aboutme[1].description.text} />

        <Flex direction={{ base: "column", md: "row" }}>
          <AboutCard
            alignment='right'
            titleAlignment='end'
            title={aboutme[2].title}
            description={aboutme[2].description.text} />
          <AboutCard
            alignment='left'
            titleAlignment='start'
            title={aboutme[3].title}
            description={aboutme[3].description.text} />
        </Flex>

        <AboutCard
          titleAlignment='start'
          title={aboutme[4].title}
          description={aboutme[4].description.text} />
      </VStack>
    </Stack>
  );
};

export default SectionAbout;
