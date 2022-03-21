import { useRef } from "react";
import emailjs from "emailjs-com";

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sz22n22",
        "template_o06jx5c",
        form.current,
        "5ktZh8SUKgLR8wgom"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Stack w='full'>
        <FormControl isRequired pb={4}>
          <FormLabel ml={4} htmlFor='name'>
            Meno
          </FormLabel>
          <Input
            id='name'
            name='name'
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
            id='email'
            name='email'
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
            Správa
          </FormLabel>
          <Textarea
            id='message'
            name='message'
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
