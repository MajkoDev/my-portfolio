import Head from "next/head";
import { Stack } from "@chakra-ui/react";

// Sections
import SectionProjects from "../components/sections/SectionProjects";
import SectionGithub from "../components/sections/SectionGithub";

// Apollo Client
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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

  const { data: pinnedItems } = await client.query({
    query: gql`
      query Github {
        githubs {
          title
          link
          language
          description
        }
      }
    `,
  });

  return {
    props: {
      projects,
      pinnedItems,
    },
  };
}
