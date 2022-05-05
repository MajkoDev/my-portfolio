import { Box, Link, Container, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const AboutCardSec = () => {
  return (
    <Box w='xl'>
      <Container maxW='container'>
        <Text
          fontWeight='light'
          textAlign='center'
          fontSize={{ base: "1.05rem", md: "1.075rem" }}>
          Všetky dôležité informácie sa dajú zhrnúť do,...
        </Text>

        <Text textAlign='center' fontSize={{ base: "1.25rem", md: "1.4rem" }}>
          Volám sa{" "}
          <NextLink href='/' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              Marián
            </Link>
          </NextLink>
          .<br />
          Vyskúšal tieto{" "}
          <NextLink href='#skills' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              technologie
            </Link>
          </NextLink>
          .
          <br />
          Poznám tieto{" "}
          <NextLink href='#languages' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              jazyky
            </Link>
          </NextLink>
          .
        </Text>

        <Text textAlign='center' fontSize={{ base: "1.25rem", md: "1.4rem" }}>
          Moje schopnosti môžeš <br /> vidieť na{" "}
          <NextLink href='/portfolio' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              týchto projektoch
            </Link>
          </NextLink>
          .
          <br />
          Tu je{" "}
          <NextLink href='/contact' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              kontakt
            </Link>
          </NextLink>
          .
        </Text>
      </Container>
    </Box>
  );
};

export default AboutCardSec;
