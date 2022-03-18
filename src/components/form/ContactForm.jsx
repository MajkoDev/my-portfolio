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
          <Input
            id='name'
            type='text'
            placeholder='Ako ťa mám osloviť, ak sa rozhodnem ti odpísať?'
            _placeholder={{
              fontSize: { base: "xs", md: "sm" },
              opacity: 1,
              color: "gray.500",
            }}
          />
        </FormControl>

        <FormControl isRequired pb={4}>
          <FormLabel ml={4} htmlFor='email'>
            Mail
          </FormLabel>
          <Input
            id='name'
            type='email'
            placeholder='Cestovný poriadok pre správy: Ktorý smerom poslať odpoveď?'
            _placeholder={{
              fontSize: { base: "xs", md: "sm" },
              opacity: 1,
              color: "gray.500",
            }}
          />
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
              fontSize: { base: "xs", md: "sm" },
              opacity: 1,
              color: "gray.500",
            }}></Textarea>

        </FormControl>
        <Center>
          <Button
            type='submit'
            w={24}
            m={6}
            bg='gray.200'
            boxShadow='md'
            _hover={{ boxShadow: "lg", bg: "gray.300" }}>
            Poslať
          </Button>
        </Center>
      </Stack>
    </form>
  );
};

export default ContactForm;
