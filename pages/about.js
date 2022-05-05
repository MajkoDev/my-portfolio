import Head from "next/head";
import { Stack } from "@chakra-ui/react";

// Sections
import SectionAbout from "../components/sections/SectionAbout";
import SectionSkills from "../components/sections/SectionSkills";

// Apollo Client
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Page
const About = ({ abouts, skills, softwares }) => {
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - O mne</title>
      </Head>
      <SectionAbout abouts={abouts} />
      <SectionSkills skills={skills} softwares={softwares} />
    </Stack>
  );
};
export default About;

const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/cl2ghbbmv33qh01z629r9erpf/master",
  cache: new InMemoryCache(),
});

export async function getServerSideProps() {
  const { data: abouts } = await client.query({
    query: gql`
      query Abouts {
        abouts {
          title
          id
          description {
            text
          }
          alignment
        }
      }
    `,
  });

  const { data: skills } = await client.query({
    query: gql`
      query Skills {
        skills {
          title
          description {
            markdown
          }
          idNumber
        }
      }
    `,
  });

  const { data: softwares } = await client.query({
    query: gql`
      query Softwares {
        softwares {
          title
          description {
            markdown
          }
          icon {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      abouts,
      skills,
      softwares,
    },
  };
}

