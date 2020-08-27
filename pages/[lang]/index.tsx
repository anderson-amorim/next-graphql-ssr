import { NextSeo } from "next-seo";
import React from "react";
import Countries from "~/components/Countries";
import withApollo from "~/lib/withApollo";

const Index = () => (
  <div>
    <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />
    <main>
      <Countries />
    </main>
  </div>
);

export default withApollo({ ssr: true })(Index);
