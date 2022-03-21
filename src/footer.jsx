import { Container, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Container as='footer' w='full'>
      <Flex>
        <Stack>
          <Heading>Mapa stránky</Heading>
          <NextLink href='/' passHref>
            <Link>O mne</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>Portfolio</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>Kontakt</Link>
          </NextLink>
        </Stack>

        <Stack>
          <Heading>Dôležité linky</Heading>
          <NextLink href='/' passHref>
            <Link>GitHub</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>Letterboxd</Link>
          </NextLink>
        </Stack>

        <Stack>
          <NextLink href='/' passHref>
            <Link>
              <Heading>Kontaktuj ma.</Heading>
            </Link>
          </NextLink>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Footer;
