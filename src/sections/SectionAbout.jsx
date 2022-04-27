import { Stack, VStack, Flex } from "@chakra-ui/react";

// Components
import AboutCard from "../ABOUT/AboutCard";
import AboutCardSec from "../ABOUT/AboutCardSec";

// Elements
import SectionTitle from "../elements/SectionTitle";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


const SectionAbout = ({ abouts }) => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='O mne.' subtitle='Čo o sebe prezradím?' />

      <VStack>
        <AboutCard
          title='Kto som'
          titleAlignment='start'
          description='Neviem čo by som mal o sebe napísať. Neviem ako a čím by som mal zaujať. Je vôbec fér, snažiť sa okúzliť prvým dojmom? Asi preto som nikdy nebol veľmi do facebooku.'
        />
        
        <AboutCardSec />
      </VStack>

      <VStack>
        <AboutCard
          title='Momentálne'
          titleAlignment='start'
          description='Práve dokončujem portfolio a tvorím projekty pre môj Github. Experimentujem s reactom and prehlbujem znalosti javascriptu na osobných projektoch. Chcel by som vytvoriť niekoľko stránok, ktoré by som rád ponúkol známym pre využitie.'
        />

        <Flex direction={{ base: "column", md: "row" }}>
          <AboutCard
            title='Plány'
            alignment='right'
            titleAlignment='end'
            description='Prejsť z hobby do kariéry. Chcel by som sa zapojiť do skutočných projektov, aby som nabral skúsenosti z reálneho sveta. Nájsť miesto, kde by som bol užitočný a zároveň sa naučim nové veci.'
          />
          <AboutCard
            title='Historia'
            alignment='left'
            titleAlignment='start'
            description='Jedného dňa som sa rozhodol vyskúšať programovať. Spravil som niekoľko chýb, respektíve som nevynechal žiadnu z nich. Našťastie sa mi podarilo väčšinu prekonať, so zvyšnými ešte zápasím. Naučil som sa základy web vývoja a bez rozvahy skočil na front-end. Vybral som si React, prišiel mi zábavnejší ako Angular a populárnejší ako Vue.'
          />
        </Flex>

        <AboutCard
          title='Samouk'
          titleAlignment='start'
          description='Po skončení gymnázia ma žiadna vysoká škola neoslovila. Rozhodol som sa naučiť webový dizajn popri práci. Počul som, že je možné sa stať programátorom aj bez školy. Preto som sa začal samovzdelávať a učiť sa na vlastnú päsť.
          '
        />
        
      </VStack>
    </Stack>
  );
};

export default SectionAbout;




