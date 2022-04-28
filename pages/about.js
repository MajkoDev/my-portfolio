import Head from "next/head";
import { Stack } from "@chakra-ui/react";
// Sections
import SectionAbout from "../src/sections/SectionAbout";
import SectionSkills from "../src/sections/SectionSkills";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const About = ({ abouts }) => {
  // console.log(abouts);
  return (
    <Stack h='full' w='full'>
      <Head>
        <title>MajkoDev - O mne</title>
      </Head>
      
      
      <SectionAbout abouts={abouts} />

      <SectionSkills />
    </Stack>
  );
};

export default About;

const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/cl2ghbbmv33qh01z629r9erpf/master",
  cache: new InMemoryCache(),
});

export async function getServerSideProps() {
  const { data } = await client.query({
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

  return {
    props: {
      abouts: data.abouts,
    },
  };
}
