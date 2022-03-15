import NextLink from "next/link";
import {Button} from "@chakra-ui/react"

const NavLink = () => {
    return(
        <NextLink href={"#portfolio-section"} passHref >
            <Button>
                ...
            </Button>
        </NextLink>
    )
}

export default NavLink