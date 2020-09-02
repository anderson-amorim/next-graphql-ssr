import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo } from 'next-apollo';
import getEnv from '~/shared/utils/getEnv';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: getEnv('GRAPHQL_SERVER_URL'),
});

export default withApollo(apolloClient);
