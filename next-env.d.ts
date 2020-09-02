/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "next-apollo" {
  import { NextPage } from "next";
  import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
  type WithApolloOptions = { ssr?: boolean };

  export function withApollo(
    client: ApolloClient<NormalizedCacheObject>
  ): (optirons?: WithApolloOptions) => (page: NextPage) => NextPage;
}

declare global {
  type FC<P = {}> = React.FC<Readonly<P>>;
}
