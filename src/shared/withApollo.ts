import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo } from 'next-apollo';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: publicRuntimeConfig.GRAPHQL_SERVER_URL,
});

export default withApollo(apolloClient);
