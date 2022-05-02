import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Text,
  DrawerOverlay,
  Flex,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

const DrawerNav = ({ isOpen, placement, onClose, btnRef }) => {
  return (
    <Flex w='full'>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent alignItems='center'>
          <DrawerCloseButton alignSelf='end' mx={5} />
          <DrawerBody>
            <Flex
              direction='column'
              mt={6}
              alignItems='start'
              justifyContent='start'>
              <NextLink href='/' passHref>
                <Text as={Link} my={3} fontSize='xl' onClick={onClose}>
                  O mne
                </Text>
              </NextLink>

              <NextLink href='./portfolio' passHref>
                <Text as={Link} my={3} fontSize='xl' onClick={onClose}>
                  Portfolio
                </Text>
              </NextLink>

              <NextLink href='/contact' passHref>
                <Text as={Link} my={3} fontSize='xl' onClick={onClose}>
                  Kontakt
                </Text>
              </NextLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default DrawerNav;
