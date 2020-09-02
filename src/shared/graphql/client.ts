import { GraphQLClient } from 'graphql-request';
import getEnv from '~/shared/utils/getEnv';

const client = new GraphQLClient(getEnv('GRAPHQL_SERVER_URL'));

export default client;
