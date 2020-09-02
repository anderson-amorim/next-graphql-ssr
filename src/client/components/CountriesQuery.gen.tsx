// ⚠️⚠️⚠️⚠️ DO NOT EDIT ⚠️⚠️⚠️⚠️
// This file was automatically generated, run yarn gen:gql to update it
/* eslint-disable */

import * as Types from '../../shared/generated/schema';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type CountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, native: string, emoji: string }> };


export const CountriesQueryDocument = gql`
    query CountriesQuery {
  countries(filter: {continent: {eq: "EU"}}) {
    code
    name
    native
    emoji
  }
}
    `;
export function useCountriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        return ApolloReactHooks.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesQueryDocument, baseOptions);
      }
export function useCountriesQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesQueryDocument, baseOptions);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesQueryLazyQueryHookResult = ReturnType<typeof useCountriesQueryLazyQuery>;
export type CountriesQueryQueryResult = ApolloReactCommon.QueryResult<CountriesQuery, CountriesQueryVariables>;