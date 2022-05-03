import Head from "next/head";
import { Stack } from "@chakra-ui/react";

// Sections
import SectionProjects from "../components/sections/SectionProjects";
import SectionGithub from "../src/sections/SectionGithub";

// Apollo Client
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import client from "../apolloClient";
import { setContext } from "@apollo/client/link/context";

// Page
export default function Portfolio({ projects, pinnedItems }) {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - Portfolio</title>
      </Head>
      <SectionProjects projects={projects} />
      <SectionGithub pinnedItems={pinnedItems} />
    </Stack>
  );
}

export async function getStaticProps() {

  // Projects
  const client = new ApolloClient({
    uri: "https://api-eu-west-2.graphcms.com/v2/cl2ghbbmv33qh01z629r9erpf/master",
    cache: new InMemoryCache(),
  });

  const { data: projects } = await client.query({
    query: gql`
      query Projects {
        projects {
          id
          title
          subtitle
          description
          deployedAt
          link
          image {
            url
          }
        }
      }
    `,
  });

  // Github Repositories

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

  const clientGithub = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await clientGithub.query({
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
                  primaryLanguage {
                    name
                    color
                  }
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
      projects,
      pinnedItems,
    },
  };
}
