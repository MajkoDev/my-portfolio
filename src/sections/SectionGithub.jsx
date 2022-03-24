import { Center, Container, Link, Stack, Text, Wrap } from "@chakra-ui/react";

// Components
import CardGithub from "../components/cards/CardGithub";

// Elements
import SectionTitle from "../elements/SectionTitle";
import GithubLink from "../elements/GithubLink";

// Apollo Client
import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


const SectionGithub = ({pinnedItems}) => {

  console.log(pinnedItems)

  return (
    <Stack h='full' w='full'>
      <SectionTitle
        title='github.'
        subtitle='Posledné projekty a repozitoriá.'
      />

      <Container m={5}>
        {pinnedItems.map(item => {
          <Link key={item.id} src={item.url}>
            <Text>{ item.name }</Text>
          </Link>
        })}
      </Container>


      <Wrap spacing='20px' justify='center'>
        <CardGithub />
        <CardGithub />
        <CardGithub />
        <CardGithub />
        <CardGithub />
      </Wrap>

      <Center>
        <GithubLink />
      </Center>
    </Stack>
  );
};

export default SectionGithub;

export async function getStaticProps(){
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "colbyfayock") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  id
                  url
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `
  });

  const {user} = data;

  const pinnedItems = user.pinnedItems.edges.map(edge => edge.node);

 
  return{
    props: {
      pinnedItems
    }
  }
}