import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const HeaderSm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex w={width}>
        <Drawer
          isOpen={isOpen}
          placement={placement}
          onClose={onClose}
          finalFocusRef={btnRef}>

          <DrawerOverlay />
          
          <DrawerCloseButton />
          <DrawerHeader>MajkoDev</DrawerHeader>
          <DrawerBody>
            <Text>something</Text>
            <Text>something more</Text>
          </DrawerBody>
        </Drawer>
      </Flex>
    </>
  );
};

export default HeaderSm;
