import { Stack, VStack, Text } from "@chakra-ui/react";
import AboutCard from "../ABOUT/AboutCard";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionAbout = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='O mne.' subtitle='Čo o sebe prezradím?' />

      <VStack justify='end'>

      

      <AboutCard />
      </VStack>

      {/* 
      Card    - Kto som.
      Card II - text of links
      Card    - momentálne
      Card    - plány
      Card    - historia
      Card    - samouk
*/}
    </Stack>
  );
};

export default SectionAbout;
