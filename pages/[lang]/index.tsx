import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import Countries from '~/client/components/Countries';
import withApollo from '~/shared/withApollo';

const Index: NextPage = ({}) => (
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
