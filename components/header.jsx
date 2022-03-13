import {
  Heading,
  HStack,
  IconButton,
  useColorMode,
  Button,
  useDisclosure,
  Link,
  Box,
  Stack,
  NavLink,
} from "@chakra-ui/react";
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import NextLink from "next/link";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        as='nav'
        w='full'
        justifyContent='space-between'
        alignItems='center'
        py={3}>
        <Heading size='md'>MajkoDev</Heading>

        <HStack alignItems='center' spacing={2}>
          <HStack display={["nono", "none", "flex", "flex"]}>
            <NextLink href='/' passHref>
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

            <NextLink href='/' passHref>
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

          <IconButton
            size='lg'
            arial-label='toggle menu'
            variant='ghost'
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <IoClose /> : <IoMenu />}
            display={["flex", "flex", "none", "none"]}
          />
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
