import {
    Heading,
    HStack,
    IconButton,
    useColorMode,
    Button,
    useDisclosure,
    Link
  } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoMoon, IoSunny} from "react-icons/io5";

import ColorMode from '../hooks/ColorMode'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <HStack w='full' px='6' py='5'  align='center' justify='space-between'>
            <Heading size='md'>MajkoDev</Heading>

            <HStack spacing='5' display={{ base: "none", md: "flex" }}>

            <NextLink href={"#about-section"} passHref>
              <Button
                as={Link}
                p={1}
                size='ms'
                variant='ghost'
                _hover={{ textDecor: "none" }}>
                O mne
              </Button>
            </NextLink>

            <NextLink href={"#portfolio-section"} passHref>
              <Button
                as={Link}
                p={1}
                size='ms'
                variant='ghost'
                _hover={{ textDecor: "none" }}>
                Portfolio
              </Button>
            </NextLink>

            <NextLink href={"#contact-section"}  passHref>
              <Button
                as={Link}
                p={1}
                size='ms'
                variant='ghost'
                _hover={{ textDecor: "none" }}>
                Kontakt
              </Button>
            </NextLink>

            <IconButton
              arial-label='toggle theme'
              variant='ghost'
              size='lg'
              icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
              onClick={toggleColorMode}
            />

            </HStack>
        </HStack >
    )
}

export default Header