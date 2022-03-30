import { Stack, VStack, Text } from "@chakra-ui/react";
import AboutCard from "../ABOUT/AboutCard";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionAbout = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='O mne.' subtitle='Čo o sebe prezradím?' />

      <VStack>

      

      <AboutCard title='Kto som' description='Neviem čo by som mal o sebe napísať. Neviem ako a čím by som mal zaujať. Je vôbec fér, snažiť sa okúzliť prvým dojmom? Asi preto som nikdy nebol veľmi do facebooku.' />


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
