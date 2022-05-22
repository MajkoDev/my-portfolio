// Chakra Ui
import { Center, Stack, Wrap, Text } from "@chakra-ui/react";

// Components
import CardGithub from "../cards/CardGithub";

// Elements
import SectionTitle from "../elements/SectionTitle";
import GithubLink from "../elements/GithubLink";

export default function SectionGithub({ pinnedItems }) {
  const items = pinnedItems.githubs;

  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='Github.'
        subtitle='Posledné projekty a repozitoriá.'
      />
      <Stack pl={{ base: "0", lg: "100px" }}>
        <Wrap spacing='20px' justify='center'>
          {items.map((item, i) => (
            <CardGithub key={item.id} {...item} />
          ))}
        </Wrap>
        <Center>
          <GithubLink />
        </Center>
      </Stack>
    </Stack>
  );
}
