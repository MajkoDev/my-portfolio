import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uir: "https://api-eu-west-2.graphcms.com/v2/cl2ghbbmv33qh01z629r9erpf/master",
  cache: new InMemoryCache(),
});

export default client;

