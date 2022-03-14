import { Heading, Stack } from "@chakra-ui/react";

const ProjectData = [
  {
    title: "blog template",
    description:
      "By default, most of Chakras components are dark mode compatible. In some scenario, you might need to make your component respond to color mode.",
    technology: "gatsby, typescript, strapi, tailwind",
  },
];

const GithubData = [
  {
    title: "income tracker",
    description: "lquentin tarantino pulp fiction on letterman",
  },
  {
    title: "income tracker",
    description: "lquentin tarantino pulp fiction on letterman",
  },
  {
    title: "income tracker",
    description: "lquentin tarantino pulp fiction on letterman",
  },
  {
    title: "income tracker",
    description: "lquentin tarantino pulp fiction on letterman",
  },
];

const ProjectSection = () => {
  return (
    <Stack id='portfolio-section'>
      <Heading>Project Section</Heading>
    </Stack>
  );
};

export default ProjectSection;
