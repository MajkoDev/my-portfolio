// Chakra Ui
import { Stack, Wrap } from "@chakra-ui/react";

// Elements
import SectionTitle from "../elements/SectionTitle";

// Components
import ProjectCardTwo from "../components/cards/ProjectCardTwo";

// Apollo Client
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import client from "../../apolloClient"

const SectionProjects = ({projects}) => {

  console.log(projects)
  
  return (
    <Stack h='full' w='full'>
      <SectionTitle title='projekty.' subtitle='Čo som naposledy vytvoril?' />

      <Wrap spacing='24px' w='full' justify='center'>
        <ProjectCardTwo />
        <ProjectCardTwo />
      </Wrap>
    </Stack>
  );
};

export default SectionProjects;

export async function getServerSideProps(){
  const {data: projects} = await client.query({
    query: gpl`
      query Projects {
      projects {
        id
        title
        subtitle
        description
        deployedAt
      }
    }
    `
  })

  

  return{
    props: {
      projects
    }
  }
}