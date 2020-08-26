import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { LazyRender } from "react-lazy-hydration-render";
import styled from "styled-components";

const Countries = () => {
  const { query } = useRouter();
  const { data } = useQuery(COUNTRIES_QUERY);
  return (
    <div>
      <Container>European Countries ({query.lang})</Container>
      <CountryList>
        <LazyRender>
          {data?.countries?.map(({ code, name, native, emoji }) => (
            <div key={code}>
              {emoji} - {name} | {native}
            </div>
          ))}
        </LazyRender>
      </CountryList>
    </div>
  );
};

const COUNTRIES_QUERY = gql`
  {
    countries(filter: { continent: { eq: "EU" } }) {
      code
      name
      native
      emoji
    }
  }
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 30px;
`;

const CountryList = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 30px;
`;

export default Countries;
