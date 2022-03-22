import {
  Box,
  Stack,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import ContactForm from "../components/form/ContactForm";

const SectionContact = () => {
  const bg = useColorModeValue("gray.200", "gray.100");

  return (
    <Stack h='full' w='full'>
      <SectionTitle title='kontakt.' subtitle='ako sa spojiť bez facebooku?' />
      <Center>
        <Box p={3} mx={12} bg={bg} w='full' boxShadow='xl' rounded='xl'>
          <ContactForm />
        </Box>
      </Center>
    </Stack>
  );
};

export default SectionContact;
