import { Box, Stack, Center } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import ContactForm from "../components/form/ContactForm";

const SectionContact = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='kontakt.' subtitle='ako sa spojiť bez facebooku?' />
      <Center>
        <Box p={3} mx={12} w='full' bg='gray.50' boxShadow='md' rounded='xl'>
          <ContactForm />
        </Box>
      </Center>
    </Stack>
  );
};

export default SectionContact;
