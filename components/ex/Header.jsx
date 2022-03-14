import {
  Image,
  Box,
  Flex,
  Button,
  HStack,
  Link,
  chakra,
} from "@chakra-ui/react";

import React from "react";
import MobileDrawer from "./MobileDrawer";

const CTA = "Get Started"


export default function Header() {
  return (
    <chakra.header id='header'>
      <Flex w='100%' px='6' py='5' align='center' justify='space-between'>
        <Box w='50px' h='50px' />

        <HStack as='nav' spacing='5' display={{ base: "none", md: "flex" }}>
          <Link>
            <Button variant='nav'> About </Button>
          </Link>
          <Link>
            <Button variant='nav'> Work </Button>
          </Link>
          <Link>
            <Button variant='nav'> Contact </Button>
          </Link>
        </HStack>
        <HStack>
          <Button aria-label={CTA} variant='outline'>
            {CTA}
          </Button>
          <MobileDrawer />
        </HStack>
      </Flex>
    </chakra.header>
  );
}
