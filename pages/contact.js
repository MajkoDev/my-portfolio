import { Box, Center, Heading, Text } from "@chakra-ui/react";
import SectionContact from "../src/sections/SectionContact";

const Contact = () => {
    return (
        <div>
            <Box>
                <Heading mt={8}>Contact Page</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet eaque laudantium quia natus et qui quo quam vero ipsam! Consequatur tempora blanditiis tempore suscipit quos quas soluta atque aspernatur vitae quaerat.</Text>
            </Box>
            <SectionContact />
        </div>
    );  
}

export default Contact;