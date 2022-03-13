import {extendTheme, theme as base} from "@chakra-ui/react";

const theme = extendTheme({
    fonts:{
        heading: `Poppins, ${base.fonts.heading}`,
    },
    textStyles: {
        h3:{
            fontWeight: 'bold',
            color: 'teal.700',
            
        }
    }
})

export default theme