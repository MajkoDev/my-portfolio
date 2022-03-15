import { Stack } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionAbout = () => {
    return (
        <Stack h='full' w='full' pt={8}>
            <SectionTitle title='o mne.' subtitle='Čo o sebe prezradím?' />
            <SectionTitle title='moje schopnosti.' subtitle='Technologie, jazyky, nástroje, ' />
            <SectionTitle title='osobne info.' subtitle='Nemám rád sociálne siete, preto na nich nie som.' />
        </Stack>
    );
}

export default SectionAbout;