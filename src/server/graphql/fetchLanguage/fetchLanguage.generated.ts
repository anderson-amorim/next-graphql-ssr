// ⚠️⚠️⚠️⚠️ DO NOT EDIT ⚠️⚠️⚠️⚠️
// This file was automatically generated, run yarn gen:gql to update it
/* eslint-disable */

import * as Types from '../../../shared/generated/schema';

import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { gql } from '@apollo/client';
export type FetchLanguageQueryVariables = Types.Exact<{
  code: Types.Scalars['ID'];
}>;


export type FetchLanguageQuery = (
  { __typename?: 'Query' }
  & { language?: Types.Maybe<(
    { __typename?: 'Language' }
    & LanguageFragment
  )> }
);

export type LanguageFragment = (
  { __typename?: 'Language' }
  & Pick<Types.Language, 'code' | 'name' | 'native'>
);

export const LanguageFragmentDoc = /*#__PURE__*/ gql`
    fragment LanguageFragment on Language {
  code
  name
  native
}
    `;
export const FetchLanguageDocument = /*#__PURE__*/ gql`
    query fetchLanguage($code: ID!) {
  language(code: $code) {
    ...LanguageFragment
  }
}
    ${LanguageFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    fetchLanguage(variables: FetchLanguageQueryVariables): Promise<FetchLanguageQuery> {
      return withWrapper(() => client.request<FetchLanguageQuery>(print(FetchLanguageDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;