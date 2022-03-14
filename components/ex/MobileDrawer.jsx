import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Link 
} from "@chakra-ui/react";
import Drawer from "./Drawer";
import { IoMdMenu } from "react-icons/io";

import React from "react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size='26px' />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems='left'>
        <Link>
            <Button variant='nav'> About </Button>
          </Link>
          <Link>
            <Button variant='nav'> Work </Button>
          </Link>
          <Link>
            <Button variant='nav'> Contact </Button>
          </Link>
        </VStack>
      </Drawer>
    </Flex>
  );
}
