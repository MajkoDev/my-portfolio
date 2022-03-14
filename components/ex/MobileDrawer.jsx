import {
  useDisclosure,
  Flex,
  Button
} from "@chakra-ui/react";

import Drawer from "./Drawer";
import { IoMdMenu } from "react-icons/io";
import {useRef} from "react"

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  
  return (
    <Flex display={{ base: "flex", md: "none" }}>

      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size='26px' />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>



      </Drawer>
    </Flex>
  );
}
