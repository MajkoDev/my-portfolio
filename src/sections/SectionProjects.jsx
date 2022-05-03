// Chakra Ui
import { Stack, Wrap } from "@chakra-ui/react";
// Elements
import SectionTitle from "../elements/SectionTitle";
// Components
import ProjectCardTwo from "../components/cards/ProjectCardTwo";

const SectionProjects = ({projects}) => {

  
  const works = projects.projects
  console.log(works)

  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />

      <Wrap spacing='24px' w='full' justify='center'>
        
        {works.map((work, i) => (
          <ProjectCardTwo key={i} title={work.title} subtitle={work.subtitle} description={work.description} link={work.link} />
        ))}


        {/* <ProjectCardTwo />
        <ProjectCardTwo /> */}


        {/* {technologies.map((technology, i) => (
            <SoftwareCard key={i} 
              title={technology.title}
              description={technology.description.markdown}
              icon={technology.icon.url} />
          ))}  */}
      </Wrap>
    </Stack>
  );
};

export default SectionProjects;