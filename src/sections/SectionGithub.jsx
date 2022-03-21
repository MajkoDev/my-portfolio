import { Center, Heading, Stack, Wrap, Link, HStack } from "@chakra-ui/react";

import NextLink from "next/link";
import { ImGithub } from "react-icons/im";

// Components
import CardGithub from "../components/cards/CardGithub";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionGithub = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='github.'
        subtitle='Posledné projekty a repozitoriá.'
      />
      <Wrap spacing='20px' justify='center'>
        <CardGithub />
        <CardGithub />
        <CardGithub />
        <CardGithub />
        <CardGithub />
      </Wrap>

      <Center>
        <NextLink href='/' passHref>
          <Link fontWeight='600' mt='6' fontSize='xs'>
            <HStack>
              <ImGithub size='22' />
              <Heading fontSize={{ base: "lg", md: "2xl" }} m='5'>
                GitHub
              </Heading>
            </HStack>
          </Link>
        </NextLink>
      </Center>
    </Stack>
  );
};

export default SectionGithub;
