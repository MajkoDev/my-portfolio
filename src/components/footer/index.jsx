import { Container, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Container as='footer'>
      <Stack
        spacing='8'
        direction={{ base: "column", md: "row" }}
        justify='space-between'
        py={{ base: "12", md: "16" }}>

            <Stack direction="row" spacing="8">

            </Stack>
        </Stack>
    </Container>
  );
};

export default Footer;
