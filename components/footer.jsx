import NextLink from "next/link";
import {
  Stack,
  VStack,
  Divider,
  Link,
  chakra,
  Text,
  Container
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack as='footer' pb='8' spacing='8' >
      <Divider />

      <Stack w='full'>
      <Text bg='blue.300'>        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis unde assumenda modi consectetur vel sed saepe nesciunt aliquid, necessitatibus tenetur sunt. Atque debitis nihil odio dolore aliquam magnam maxime dolor sunt distinctio fugit voluptas porro fugiat ab nesciunt autem praesentium corporis dolores sapiente quo, vel quisquam quam! Autem, necessitatibus blanditiis. Exercitationem consectetur molestiae fugit!
</Text>
      </Stack>

      <Stack spacing='4' minW='36' flex='1'>
        <Text fontSize='sm' fontWeight='semibold' color='subtle'>
          Product
        </Text>
      </Stack>

      <Stack
        justifyContent='space-between'
        w='full'
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}>
        <VStack alignItems='flex-start' spacing={2}>
          <NextLink href='/' passHref>
            <Link>O mne</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>Portfolio</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>Kontakt</Link>
          </NextLink>
        </VStack>

        <VStack alignItems='flex-start'>
          <NextLink href='/' passHref>
            <Link textStyle='h3' _hover={{ color: "teal.300" }}>
              Github
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link textStyle='h3' _hover={{ color: "teal.300" }}>
              Letterboxd
            </Link>
          </NextLink>
        </VStack>

        <VStack alignItems='flex-start'></VStack>
      </Stack>

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

export default Footer;
