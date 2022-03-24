import { Heading, Link, HStack, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { ImGithub } from "react-icons/im";

export default function GithubLink() {
  return (
    <Box mt={5}>
      <NextLink href='/' passHref>
        <Link>
          <HStack>
            <Heading fontSize={{ base: "lg", md: "2xl" }} fontWeight={300}>
              navštív môj{" "}
            </Heading>
            <Heading fontSize={{ base: "lg", md: "2xl" }}>GitHub</Heading>
            <ImGithub size='22' />
          </HStack>
        </Link>
      </NextLink>
    </Box>
  );
}
