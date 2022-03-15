import { Box } from "@material-ui/core";
import Image from "next/image";

const CardGithub = () => {
    return (
        <Box maxW='250px' w='full' boxShadow='2xl' rounded='md' p={6} overflow='hidden'>
            <Box>
                <Image  />
            </Box>
        </Box>
    );
}

export default CardGithub;