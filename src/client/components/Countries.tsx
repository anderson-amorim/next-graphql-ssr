import { LazyRender } from 'react-lazy-hydration-render';
import styled from 'styled-components';
import usePathLanguage from '~/client/hooks/usePathLanguage';
import { useCountriesQuery } from './CountriesQuery.gen';

const Countries = () => {
  const lang = usePathLanguage();
  const { data } = useCountriesQuery();
  return (
    <div>
      <Container>European Countries ({lang})</Container>
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

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 30px;
`;

const CountryList = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 30px;
`;

export default Countries;
