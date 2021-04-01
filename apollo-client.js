import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    uri: "https://api-us-east-1.graphcms.com/v2/ckmshonascuet01z23sl73cte/master",
    cache: new InMemoryCache(),
   
});

export default client;