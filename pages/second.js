import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  Spacer,
  Flex,
} from "@chakra-ui/react";

const Second = () => {
  return (
    <>
      {/* Firs Section */}

      <Container maxW='4xl' h='90vh' bg='blue.50' >
        <Flex
          h='90vh'
          justify='center'
          align='center'  
          direction={{ base: "column", md: "row" }}>

          <VStack mb={2} p={0} spacing='24px' >
            <Container bg='blue.600' w={{base: 'sm', md: 'md', lg: 'lg'}} h='150px' />


            <Container bg='blue.600' w={{base: 'sm', md: 'md', lg: 'lg'}} h='150px' />
          </VStack>


          <Container bg='blue.600' 
           w={{base: 'sm', md: 'md'}} ml={{base: 'auto', md: '6', lg: '12'}} h='150px' />
        </Flex>
      </Container>



      <Container h='100vh' bg='blue.200'></Container>
      <Container h='100vh' bg='blue.300'></Container>

      <Box bg='red.50' mx='10' w={{ base: "md", md: "600px", lg: "700px" }}>
        <Heading fontSize={{ base: "xl", md: "3xl" }} mb='2'>
          Momentálne
        </Heading>
        <Text fontSize={{ base: "13px", md: "15px", lg: "17px" }}>
          V tomto okamihu dokončujem portfolio a tvorím projekty pre môj Github.
          Experimentujem s reactom and prehlbujem znalosti javascriptu na
          osobných projektoch. Chcel by som vytvoriť niekoľko stránok, ktoré by
          som rád ponúkol známym pre využitie.
        </Text>
      </Box>
    </>
  );
};

export default Second;
