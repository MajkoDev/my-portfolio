import { Stack } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionAbout = () => {
    return (
        <Stack h='full' w='full' pt={8}>
            <SectionTitle title='o mne.' subtitle='Čo o sebe prezradím?' />

        </Stack>
    );
}

export default SectionAbout;