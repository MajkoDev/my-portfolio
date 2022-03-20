import { Stack, Flex, Container, Heading, Text, Box } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import SectionText from "../elements/SectionText";

const SectionSkills = () => {
  const skills = [
    {
      title: "kto som?",
      description:
        "poznám html, css, javascript stále viac a viac sa učím javascript, keďže ho využívam na aplikácie a projekty",
    },
    {
      title: "dizajnovanie",
      description:
        "poznám html, css, javascript stále viac a viac sa učím javascript, keďže ho využívam na aplikácie a projekty",
    },
  ];

  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='moje schopnosti.'
        subtitle='Technologie, jazyky, nástroje, '
      />

      <Flex direction='column' align={{ base: "center", md: "end" }}>
        {/* <SectionText title={skills.title} description={skills.description} /> */}


        <SectionText 
          title="základy web vývoja." 
          description="poznám Html, Css, Javascript. ťažko si predstaviť pracovať bez nich.
          neustále sa k nim vraciam a využívam ich, keďže sú základom program.
          jazykov, s ktorými pracujem." />



        <Box>
        <Container rounded='lg' boxShadow='xl' p='6' w={{base: 'sm', md: 'lg'}}>
          <Heading fontSize={{ base: "md", md: "lg" }} mb={3}>
            základy web vývoja.
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} mb={3}>
            poznám Html, Css, Javascript. ťažko si predstaviť pracovať bez nich.
            neustále sa k nim vraciam a využívam ich, keďže sú základom program.
            jazykov, s ktorými pracujem.
          </Text>
        </Container>
        </Box>

        



      </Flex>


    </Stack>
  );
};

export default SectionSkills;
