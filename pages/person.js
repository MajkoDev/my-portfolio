import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  Container,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import styled from "@emotion/styled";


const SelectTitle = styled(Heading)`
  background: linear-gradient(90deg, #e70b9c -20.91%, #2c16b5 122.73%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 900;
`;

const SelectSubtitle = styled(Heading)`
  font-weight: 800;
  background: linear-gradient(276.62deg, #e72e0b -20%, #2c16b5 120.8%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const SkillNumber = styled(Heading)`
  font-weight: 900;
  background: linear-gradient(
    151.62deg,
    rgba(13, 99, 21, 0.5) 7.79%,
    rgba(82, 201, 252, 0.5) 84.59%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

// redesing about page

const About = () => {
  return (
    <Stack h='full' w='full'>
       <Stack align={{ base: "end", md: "start" }} mt='4'>
        <Heading fontSize={{ base: "xl", md: "5xl" }}>
          <SelectTitle>O mne.</SelectTitle>{" "}
        </Heading>

        <Divider />

        <Text align={{ base: "end", md: "start" }} as='i' fontSize='md'>
          mám opísať sám seba?!
        </Text>
      </Stack>

      {/* About Me Section Intro */}

      <Stack maxW='container.lg'>



      <Container maxW='container.md'>
        <Heading>Kto Som</Heading>
        <Text>
          Neviem čo by som mal o sebe napísať. Neviem ako a čím by som mal
          zaujať. Je vôbec fér, snažiť sa okúzliť prvým dojmom? Asi preto som
          nikdy nebol veľmi do facebooku.
        </Text>
      </Container>

      <Container maxW='container.md'>
        <Text>Všetky dôležité informácie sa dajú zhrnúť do,...</Text>
        <Text>Volám sa Marián.</Text>
        <Text>
          Poznám tieto jazyky. <br /> Vyskúšal tieto technologie.{" "}
        </Text>
        <Text>Moje schopnosti môžeš vidieť na týchto projektoch.</Text>
        <Text>Tu je kontakt.</Text>
      </Container>

      <Container maxW='container.md'>
        <Heading>Momentálne</Heading>
        <Text>
          práve dokončujem portfolio a tvorím projekty pre môj Github.
          experimentujem s reactom and prehlbujem znalosti javascriptu na
          osobných projektoch. chcel by som vytvoriť niekoľko stránok, ktoré by
          som rád ponúkol známym pre využitie.
        </Text>
      </Container>

      <Container>
        <Heading>Plány</Heading>
        <Text>
          prejsť z hobby do kariéry. chcel by som sa zapojiť do skutočných
          projektov, aby som nabral skúsenosti z reálneho sveta. nájsť miesto,
          kde by som bol užitočný a zároveň sa naučim nové veci.
        </Text>
      </Container>

      <Container>
        <Heading>Historia</Heading>
        <Text>
          Jedného dňa som sa rozhodol vyskúšať programovať. Spravil som niekoľko
          chýb, respektíve som nevynechal žiadnu z nich. Našťastie sa mi
          podarilo väčšinu prekonať, so zvyšnými ešte zápasím. Naučil som sa
          základy web vývoja a bez rozvahy skočil na front-end. Vybral som si
          React, prišiel mi zábavnejší ako Angular a populárnejší ako Vue.
        </Text>
      </Container>

      <Container>
        <Heading>Samouk</Heading>
        <Text>
          Po skončení gymnázia ma žiadna vysoká škola neoslovila. Rozhodol som
          sa naučiť webový dizajn popri práci. Počul som, že je možné sa stať
          programátorom aj bez školy. Preto som sa začal samovzdelávať a učiť sa
          na vlastnú päsť.
        </Text>
      </Container>
      </Stack>

      {/* Section About Me */}



      

      {/* Title for Skill Section */}
      <Stack py='10'>
        <Flex direction={{ base: "column", md: "row" }} align='end'>
          <Heading fontSize={{ base: "xl", md: "5xl" }}>
            <SelectTitle>Schopnosti.</SelectTitle>{" "}
          </Heading>

          <Spacer />
          <Text as='i' fontSize={{ base: "sm", md: "md" }}>
            vedomosti, technologie, jazyky, nástroje
          </Text>
        </Flex>

        <Divider />
      </Stack>








      {/* Container for Skill Section */}

      <Container  maxW='container.md'>
        <HStack>
          <SkillNumber fontSize='9xl' m={6}>1.</SkillNumber>

          <Stack>
            <Heading fontSize='2xl'>základy web vývoja.</Heading>
            <Text fontSize={{base: 'sm', md: 'md'}} >
              poznám Html, Css, Javascript, ťažko si predstaviť pracovať bez
              nich. neustále sa k nim vraciam a využívam ich, keďže sú základom
              program. jazykov, s ktorými pracujem. stále si dopĺňam vedomosti z
              Javascriptu, keďže ho využívam pri práci v Reacte.
            </Text>
          </Stack>
        </HStack>
      </Container>
    </Stack>
  );
};

export default About;
