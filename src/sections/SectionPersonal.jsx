import { Stack } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionPersonal = () => {
    return (
        <Stack h='full' w='full' >
            <SectionTitle title='osobne info.' subtitle='Nemám rád sociálne siete, preto na nich nie som.' />

        </Stack>
    );
}

export default SectionPersonal;