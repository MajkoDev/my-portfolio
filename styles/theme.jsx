import {extendTheme, theme as base} from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Heading: {
            baseStyle: {
                color: 'gray.700'
            }
        },
        Text: {
            baseStyle: {
                color: 'gray.700'
            }
        }
    },
    fonts:{
        heading: `Poppins, ${base.fonts.heading}`,
        body: `Inter, ${base.fonts.body}`
    },



    textStyles: {
        h1:{
            fontSize: ['48px', '72px'],
      fontWeight: 'bold',
        },
        h2:{},
        h3:{
            fontWeight: 'bold',
            color: 'teal.400',
            
        },
        h4:{
            fontWeight: 'bold',
            fontSize:['24px', '18px'],
            color: 'gray.50',
        },
        h5:{},
    }
})

export default theme