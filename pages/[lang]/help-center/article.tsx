import Head from "next/head";
import withApollo from "~/lib/withApollo";
import { useRouter } from "next/router";

const Article = () => {
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
