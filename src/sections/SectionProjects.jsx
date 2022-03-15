import {  Wrap } from "@chakra-ui/react";
import CardExample from "../components/cards/CardExample";
import CardProject from "../components/cards/CardProject";

const SectionProjects = () => {
  return (
    <div>
      <Wrap spacing='20px' justify='center'>
        <CardExample />
        <CardExample />
      </Wrap>
    </div>
  );
};

export default SectionProjects;
