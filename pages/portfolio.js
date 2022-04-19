import Head from "next/head";
import { Stack } from "@chakra-ui/react";

// Sections
import SectionGithub from "../src/sections/SectionGithub";
import SectionProjects from "../src/sections/SectionProjects";

// Apollo Client
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Page
export default function Portfolio({ pinnedItems }) {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - Portfolio</title>
      </Head>
      <SectionProjects />
      <SectionGithub pinnedItems={pinnedItems} />
    </Stack>
  );
}

// Github Repositories
export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "MajkoDev") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  description
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
}
