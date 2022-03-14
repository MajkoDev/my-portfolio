import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ 
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('blue.900', 'whiteAlpha.900')(props),
        bg: mode('white', 'blue.900')(props),
        lineHeight: 'base',
      },
    }),
  },
 
 

  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
 });

export default theme;
