import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { IoMenu, IoClose } from "react-icons/io5";

const ColorMode = () => {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <IconButton
      size='lg'
      arial-label='toggle menu'
      variant='ghost'
      onClick={isOpen ? onClose : onOpen}
      icon={isOpen ? <IoClose /> : <IoMenu />}
      display={["flex", "flex", "none", "none"]}
    />
  );
};

export default ColorMode;
