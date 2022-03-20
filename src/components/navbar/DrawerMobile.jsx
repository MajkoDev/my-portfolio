import { useRef } from "react";
import DrawerNav from "./Drawer";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

const DrawerMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size='26px' />
      </Button>
      <DrawerNav isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </Flex>
  );
};

export default DrawerMobile;
