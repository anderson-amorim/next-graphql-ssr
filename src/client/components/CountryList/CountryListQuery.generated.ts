// ⚠️⚠️⚠️⚠️ DO NOT EDIT ⚠️⚠️⚠️⚠️
// This file was automatically generated, run yarn gen:gql to update it
/* eslint-disable */

import * as Types from '../../../shared/generated/schema';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type CountryListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountryListQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, native: string, emoji: string }> };


export const CountryListQueryDocument = /*#__PURE__*/ gql`
    query CountryListQuery {
  countries(filter: {continent: {eq: "EU"}}) {
    code
    name
    native
    emoji
  }
}
    `;
export function useCountryListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CountryListQuery, CountryListQueryVariables>) {
        return ApolloReactHooks.useQuery<CountryListQuery, CountryListQueryVariables>(CountryListQueryDocument, baseOptions);
      }
export function useCountryListQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountryListQuery, CountryListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CountryListQuery, CountryListQueryVariables>(CountryListQueryDocument, baseOptions);
        }
export type CountryListQueryHookResult = ReturnType<typeof useCountryListQuery>;
export type CountryListQueryLazyQueryHookResult = ReturnType<typeof useCountryListQueryLazyQuery>;
export type CountryListQueryQueryResult = ApolloReactCommon.QueryResult<CountryListQuery, CountryListQueryVariables>;