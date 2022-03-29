import { Stack } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";
import SectionText from "../elements/SectionText";

const SectionSkills = () => {
  return (
    <Stack h='full' w='full'>

      {/* TITLE */}
      <SectionTitle
        title='Schopnosti.'
        subtitle='vedomosti, technologie, jazyky, nástroje'
      />

      {/* LAYOUT */}
      






      {/* CARDS: 1-4 */}
      <SectionText
        title='nonoe'
        description='Technologie, jazyky, nástroje, Technologie, jazyky, nástroje, Technologie, jazyky, nástroje,'
      />
    </Stack>
  );
};

export default SectionSkills;
