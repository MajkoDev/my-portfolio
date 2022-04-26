import { Center, Stack, Wrap } from "@chakra-ui/react";

// Components
import CardGithub from "../components/cards/CardGithub";

// Elements
import SectionTitle from "../elements/SectionTitle";
import GithubLink from "../elements/GithubLink";

export default function SectionGithub({ pinnedItems }) {
  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='github.'
        subtitle='Posledné projekty a repozitoriá.'
      />

      <Stack pl={{ base: "0", lg: "100px" }}>
        <Wrap spacing='20px' justify='center'>
          {pinnedItems.map((item) => {
            return <CardGithub key={item.id} {...item} />;
          })}
        </Wrap>
        
        <Center>
          <GithubLink />
        </Center>
      </Stack>
    </Stack>
  );
}
