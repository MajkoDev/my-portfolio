import { IconButton, useColorMode } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      arial-label='toggle theme'
      variant='ghost'
      size='lg'
      icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeBtn;
