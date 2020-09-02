import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import Countries from '~/client/components/CountryList';
import withApollo from '~/shared/graphql/withApollo';

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
