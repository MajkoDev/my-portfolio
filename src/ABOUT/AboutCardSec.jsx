import { Box, Link, Container, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const AboutCardSec = () => {
  return (
    <Box>
      <Container maxW='container.sm'>
        <Text fontWeight='light' textAlign='center'>
          Všetky dôležité informácie sa dajú zhrnúť do,...
        </Text>

        <Text textAlign='center' fontSize={{ base: "lg", md: "xl" }}>
          Volám sa {" "}
          <NextLink href='/' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              Marián
            </Link>
          </NextLink>
          .
          <br />
          Poznám tieto {" "}
          <NextLink href='/' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              jazyky
            </Link>
          </NextLink>
          . <br />
          Vyskúšal tieto {" "}
          <NextLink href='/' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              technologie
            </Link>
          </NextLink>
          .
        </Text>

        <Text textAlign='center' fontSize={{ base: "lg", md: "xl" }}>
          Moje schopnosti môžeš <br /> vidieť na{" "}
          <NextLink href='/' passHref>
            <Link _hover={{ color: "pink.800" }} fontWeight='bold'>
              týchto projektoch
            </Link>
          </NextLink>
          .
          <br />
          Tu je{" "}
          <NextLink href='/' passHref>
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
