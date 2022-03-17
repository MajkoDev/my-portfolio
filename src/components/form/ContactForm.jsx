import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <form action='submit'>
      <Stack w='full'>
        <FormControl isRequired pb={4}>
          <FormLabel ml={4} htmlFor='name'>
            Meno
          </FormLabel>
          <FormHelperText ml={4} mb={4} fontSize={{ base: "xs", md: "sm" }}>
            Ako ťa mám osloviť, ak sa rozhodnem ti odpísať?
          </FormHelperText>
          <Input id='name' type='text' />
        </FormControl>

        <FormControl isRequired pb={4}>
          <FormLabel ml={4} htmlFor='email'>
            Mail
          </FormLabel>
          <Input id='name' type='email' />
          <FormHelperText ml={4} fontSize={{ base: "xs", md: "sm" }}>
            Cestovný poriadok pre správy: Ktorý smerom poslať odpoveď?
          </FormHelperText>
        </FormControl>

        <FormControl isRequired pb={4}>
          <FormLabel ml={4} htmlFor='message' fontSize='md'>
            Posolstvo
          </FormLabel>
          <Textarea
            id='message'
            type='text'
            height='32'
            placeholder='Ťažko čítam, ľahké slová. Prosím v skrátenej forme.'
            _placeholder={{
              fontSize: "sm",
              opacity: 1,
              color: "gray.500",
            }}></Textarea>
          {/* <FormHelperText ml={4} fontSize={{base: 'xs', md: 'sm'}}  >Ťažko čítam, ľahké slová. Prosím v skrátenej forme.</FormHelperText> */}
        </FormControl>
        <Center>
          <Button
            type='submit'
            w={24}
            m={6}
            boxShadow='md'
            _hover={{ boxShadow: "lg" }}>
            Poslať
          </Button>
        </Center>
      </Stack>
    </form>
  );
};

export default ContactForm;
