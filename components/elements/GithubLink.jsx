import { Heading, HStack, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ImGithub } from "react-icons/im";

export default function GithubLink() {
  return (
    <Box mt={5}>
      <Link href='https://github.com/MajkoDev' passHref>
        <a target='_blank' rel='noreferrer'>
          <Button variant='ghost'>
            <HStack>
              <Heading fontSize={{ base: "lg", md: "2xl" }} fontWeight={300}>
                navštív môj{" "}
              </Heading>
              <Heading fontSize={{ base: "lg", md: "2xl" }}>GitHub</Heading>
              <Box ml='1'>
                <ImGithub size='22' />
              </Box>
            </HStack>
          </Button>
        </a>
      </Link>
    </Box>
  );
}
