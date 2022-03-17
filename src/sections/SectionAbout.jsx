import { Stack } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionAbout = () => {
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='o mne.' subtitle='Čo o sebe prezradím?' />
    </Stack>
  );
};

export default SectionAbout;
