import { Container, Stack, Heading, Text } from "@chakra-ui/react";



export default function Home() {
  return (
    <>
      <Container maxW='container.lg' padding={0}>
        <Stack
          textAlign='center'
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>
            Volám sa, <br />
            <Text color='blue.700'>Marian.</Text>
          </Heading>
        </Stack>
      </Container>
    </>
  );
}
