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
  useColorModeValue,
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

  const bgInput = useColorModeValue("gray.50", "gray.200");

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Stack w='full'>
        <FormControl isRequired pb={4}>
          <FormLabel ml={4} htmlFor='name' color='blue.800' fontWeight='500'>
            Meno
          </FormLabel>
          <Input
            id='name'
            name='name'
            type='text'
            bg={bgInput}
            borderColor='blue.700'
            focusBorderColor='blue.700'
            placeholder='Ako ťa mám osloviť, ak sa rozhodnem ti odpísať?'
            _placeholder={{
              fontSize: { base: "xs", md: "sm" },
              fontWeight: "500",
              opacity: 1,
              color: "gray.500",
            }}
          />
        </FormControl>

        <FormControl isRequired pb={4}>
          <FormLabel ml={4} htmlFor='email' color='blue.800' fontWeight='500'>
            Mail
          </FormLabel>
          <Input
            id='email'
            name='email'
            type='email'
            bg={bgInput}
            borderColor='blue.700'
            focusBorderColor='blue.700'
            placeholder='Ktorým smerom ti mam poslať odozvu?'
            _placeholder={{
              fontSize: { base: "xs", md: "sm" },
              fontWeight: "500",
              opacity: 1,
              color: "gray.500",
            }}
          />
        </FormControl>

        <FormControl isRequired pb={2}>
          <FormLabel
            ml={4}
            htmlFor='message'
            fontSize='md'
            color='blue.800'
            fontWeight='500'>
            Správa
          </FormLabel>
          <Textarea
            id='message'
            name='message'
            type='text'
            bg={bgInput}
            borderColor='blue.700'
            focusBorderColor='blue.700'
            height='32'
            placeholder='Ťažko čítam, ľahké slová. Prosím v skrátenej forme.'
            _placeholder={{
              fontSize: { base: "xs", md: "sm" },
              fontWeight: "500",
              opacity: 1,
              color: "gray.500",
            }}></Textarea>
        </FormControl>
        
        <Center>
          <Button
            type='submit'
            w={24}
            m={6}
            color='white'
            bg='blue.700'
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
