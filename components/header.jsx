import {
  Heading,
  HStack,
  IconButton,
  useColorMode,
  Button,
  Link,
} from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack
      as='nav'
      w='full'
      justifyContent='space-between'
      alignItems='center'
      py={3}>
      <Heading size='md'>MajkoDev</Heading>

      <HStack alignItems='center' spacing={2}>
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

        <NextLink href='/' passHref>
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
          icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
