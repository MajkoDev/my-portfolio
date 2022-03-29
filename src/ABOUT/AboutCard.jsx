import { Box, Container, Heading, Text } from "@chakra-ui/react";

import AboutSubtitle from "../ABOUT/AboutSubtitle"

const AboutCard = ({title, description}) => {
  return (
    <Box>
      <Container maxW='container.md' mb='6'>
          
        <AboutSubtitle title='Kto som' />
        <Text>
          Neviem čo by som mal o sebe napísať. Neviem ako a čím by som mal
          zaujať. Je vôbec fér, snažiť sa okúzliť prvým dojmom? Asi preto som
          nikdy nebol veľmi do facebooku.
        </Text>
      </Container>
    </Box>
  );
};

export default AboutCard;
