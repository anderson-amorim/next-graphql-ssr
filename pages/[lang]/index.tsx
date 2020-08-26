import Head from "next/head";
import React from "react";
import Countries from "~/components/Countries";
import withApollo from "~/lib/withApollo";

const Index = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Countries />
    </main>
  </div>
);

export default withApollo({ ssr: true })(Index);
