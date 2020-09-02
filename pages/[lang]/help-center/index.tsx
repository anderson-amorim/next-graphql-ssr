import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import withApollo from '~/shared/withApollo';

const HelpCenter: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>HelpCenter page ({query.lang})</main>
    </div>
  );
};

export default withApollo({ ssr: true })(HelpCenter);
