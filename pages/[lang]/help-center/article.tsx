import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import withApollo from "~/shared/withApollo";

const Article: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>HelpCenter Article page ({query.lang})</main>
    </div>
  );
};

export default withApollo({ ssr: true })(Article);
