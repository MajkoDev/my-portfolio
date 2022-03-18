import { Stack, Heading } from "@chakra-ui/react";
import CardGithub from "../components/cards/CardGithub";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionGithub = () => {
    return (
        <Stack h='full' w='full'>
            <SectionTitle title='github.' subtitle='Posledné projekty a repozitoriá.' />
            <CardGithub />
        </Stack>
    );
}

export default SectionGithub;