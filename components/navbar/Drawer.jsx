import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
} from "@chakra-ui/react";

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
            <Flex direction='column' alignItems='start' justifyContent='start'>
              <Link>
                <Button fontSize='lg'>O mne</Button>
              </Link>
              <Link>
                <Button fontSize='lg'>Portfolio</Button>
              </Link>
              <Link>
                <Button fontSize='lg'>Kontakt</Button>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Drawer;
