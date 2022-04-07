import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({
  // fonts
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  // customize colors
  colors: {
   
    blue: {
      50: "#99c8ff",
      100: "#bdd6f4",
      200: "#93baea",
      300: "#6a9fe2",
      400: "#4384da",
      500: "#2c6ac1",
      600: "#215397",
      700: "#173b6c",
      800: "#0b2342",
      900: "#010c1a",
    },
    red: {
      50: "#ffe5ed",
      100: "#fabbc9",
      200: "#f08fa4",
      300: "#e86380",
      400: "#e1385c",
      500: "#c71e42",
      600: "#9c1634",
      700: "#710e24",
      800: "#450515",
      900: "#1e0006",
    },
    linear:{
      1: "linear-gradient(90deg, #E70B9C -20.91%, #2C16B5 122.73%)"
    }
  },

  styles: {
    global: (props) => ({
      // dark and light theme
      body: {
        color: mode("blue.800", "gray.50")(props),
        bg: mode("gray.50", "blue.800")(props),
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
