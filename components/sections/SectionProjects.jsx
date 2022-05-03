// Chakra Ui
import { Stack, Wrap } from "@chakra-ui/react";
// Elements
import SectionTitle from "../elements/SectionTitle";
// Components
import ProjectCard from "../cards/ProjectCard";

const SectionProjects = ({projects}) => {
  const works = projects.projects
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />
      <Wrap spacing='24px' w='full' justify='center'>
        {works.map((work, i) => (
          <ProjectCard key={i} title={work.title} subtitle={work.subtitle} description={work.description} link={work.link} image={work.image.url} />
        ))}
      </Wrap>
    </Stack>
  );
};

export default SectionProjects;