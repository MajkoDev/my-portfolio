import {Divider, Heading, Stack, Text} from '@chakra-ui/react'

const SectionTitle = ({title, subtitle}) => {
    return (
        <>
        <Stack align={{ base: "center", md: "start"}} >
            <Heading fontSize={{base: '4xl', md: '5xl'}} >{title} </Heading>
            <Text fontSize={{base: 'md', md: 'lg'}} >{subtitle}</Text>
        </Stack>
        <Divider/> 
        </>
    );
}

export default SectionTitle;