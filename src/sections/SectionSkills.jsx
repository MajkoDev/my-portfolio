import { Stack, Heading, Flex } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

const SectionSkills = () => {
    return (
        <Stack h='full' w='full'>
            <SectionTitle title='moje schopnosti.' subtitle='Technologie, jazyky, nástroje, ' />

            <Flex direction='column' align={{ base: "center", md: "end" }}>
                
            </Flex>




        </Stack>
    );
}

export default SectionSkills;