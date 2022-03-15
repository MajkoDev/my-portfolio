import {
    Heading,
    HStack,
    Button,
    useDisclosure,
    Link
  } from "@chakra-ui/react";
import NextLink from "next/link";

import ColorModeBtn from './ColorModeBtn'
import DrawerMobile from './DrawerMobile'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <HStack w='full' py='5'  align='center' justify='space-between'>
          <NextLink href='./' passHref>
            <Heading size='md' as={Link} _hover={{ textDecor: "none" }}>MajkoDev</Heading>
            </NextLink>

            <HStack spacing='5' display={{ base: "none", md: "flex" }}>

            <NextLink href='./about' passHref>
              <Button
                as={Link}
                p={1}
                size='ms'
                variant='ghost'
                _hover={{ textDecor: "none" }}>
                O mne
              </Button>
            </NextLink>

            <NextLink href='./portfolio' passHref>
              <Button
                as={Link}
                p={1}
                size='ms'
                variant='ghost'
                _hover={{ textDecor: "none" }}>
                Portfolio
              </Button>
            </NextLink>

            <NextLink href='./contact'  passHref>
              <Button
                as={Link}
                p={1}
                size='ms'
                variant='ghost'
                _hover={{ textDecor: "none" }}>
                Kontakt
              </Button>
            </NextLink>



            <ColorModeBtn />

            </HStack>
            <DrawerMobile />
        </HStack >
    )
}

export default Header