import client from '~/shared/graphql/client';
import { getSdk } from './fetchLanguage.generated';

const fetchLanguage = async (code = '') => {
  const sdk = getSdk(client);
  const { language } = await sdk.fetchLanguage({ code });
  return language;
};

export default fetchLanguage;
