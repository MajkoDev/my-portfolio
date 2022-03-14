import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Link, Button, 
  Flex,
  Text,
} from "@chakra-ui/react";

export default function DrawerExample({isOpen, placement, onClose, childen, btnRef}) {
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
          <DrawerHeader>
            <Text as='p'> Title </Text>
          </DrawerHeader>
          <DrawerBody>
            
          <Link>
            <Button variant='nav'> About </Button>
          </Link>
          <Link>
            <Button variant='nav'> Work </Button>
          </Link>
          <Link>
            <Button variant='nav'> Contact </Button>
          </Link>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
