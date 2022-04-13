import NextLink from "next/link";
import {
  Stack,
  Box,
  VStack,
  PseudoBox,
  Divider,
  Link,
  Flex,
  chakra,
  Text,
  HStack,
  Heading,
  Spacer,
} from "@chakra-ui/react";

const Footer2 = () => {
  return (
    <Stack as='footer' pb='8' spacing='8'>
      <Divider />

      <Stack w='full' direction={{ base: "column", md: "row" }}>
        <VStack alignItems='flex-start'>
          <Text ml='1' fontWeight='200'>
            Ako ma kontaktovať?
          </Text>
          <NextLink href='/contact' passHref>
            <Link>
              <Heading
                fontWeight='400'
                _hover={{ fontWeight: "600" }}
                size='xl'>
                Poslať správu
              </Heading>
            </Link>
          </NextLink>
        </VStack>
        <Spacer />

        <HStack alignItems='end'>
          <Spacer />
          <HStack alignItems='flex-start'>
            <NextLink href='https://github.com/MajkoDev' passHref>
              <a target='_blank' rel='noreferrer'>
                <Link
                  textStyle='h3'
                  fontWeight='semibold'
                  _hover={{ color: "#e02251" }}>
                  Github
                </Link>
              </a>
            </NextLink>
            <NextLink href='https://letterboxd.com/Stupel/' passHref>
              <a target='_blank' rel='noreferrer'>
                <Link
                  textStyle='h3'
                  fontWeight='semibold'
                  _hover={{ color: "#e02251" }}>
                  Letterboxd
                </Link>
              </a>
            </NextLink>
          </HStack>
        </HStack>
      </Stack>

      <Flex justifyContent='center' direction={{ base: "column", md: "row" }}>
        <NextLink href='/about' passHref>
          <Link
            fontSize='18'
            mx='3'
            p='3'
            _hover={{
              boxShadow: "2xl",
              fontWeight: "semibold",
              rounded: "2xl",
              a: "u",
            }}>
            O mne
          </Link>
        </NextLink>

        <NextLink href='/portfolio' passHref>
          <Link
            fontSize='18'
            mx='3'
            p='3'
            _hover={{
              boxShadow: "2xl",
              fontWeight: "semibold",
              rounded: "2xl",
              a: "u",
            }}>
            Portfolio
          </Link>
        </NextLink>
        <NextLink href='/contact' passHref>
          <Link
            fontSize='18'
            mx='3'
            p='3'
            _hover={{
              boxShadow: "2xl",
              fontWeight: "semibold",
              rounded: "2xl",
              a: "u",
            }}>
            Kontakt
          </Link>
        </NextLink>
      </Flex>

      <Stack
        alignItems='center'
        justifyContent={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}>
        <Text color='gray.500' fontSize='sm'>
          ©{" "}
          <chakra.span as='time' color='purple.500'>
            {new Date().getFullYear()}
          </chakra.span>{" "}
          Marian Dev
        </Text>
      </Stack>
    </Stack>
  );
};

export default Footer2;
