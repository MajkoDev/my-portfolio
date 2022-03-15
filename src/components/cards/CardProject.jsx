import { Box } from "@material-ui/core";

import Image from "next/image";
import projectImg from "../../../public/images/design-image.png";

const CardProject = () => {
  return (
    <Box
      maxW='250px'
      w='full'
      boxShadow='2xl'
      rounded='md'
      p={6}
      overflow='hidden'>
      <Box h='150px' position='relative'>
        <Image src={projectImg} alt='Image of Project' layout='fill' />
      </Box>
    </Box>
  );
};

export default CardProject;
