import { Box, Stack, Center, Button } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import ContactForm from "../components/form/ContactForm";

const SectionContact = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='kontakt.' subtitle='ako sa spojiť bez facebooku?' />
      <Center>
        <Box p={3} mx={12} w='full' boxShadow='xl' rounded='xl'>
          <ContactForm />
        </Box>
      </Center>
      <Center>
        <Button size='lg' w='32'>
          Hello
        </Button>
      </Center>
    </Stack>
  );
};

export default SectionContact;
