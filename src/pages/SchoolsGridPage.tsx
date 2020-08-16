import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import QueryFilter from '../components/sections/SchoolsPage/QueryFilter';
import { useSchools } from '../api/schools';
import styled from '../styling/styled';
import Card from '../components/Card';
import { createPlaceholderStyles } from '../utils/loading';
import { School } from '../types';
import SchoolCard from '../components/SchoolCard';
import DropdownFilters from '../components/sections/SchoolsPage/DropdownFilters';
import {
  deserializeFilters,
  deserializePage,
  deserializeQuery,
  serializeSearchData,
} from '../utils/search';
import { filters } from '../data/filters';
import Pagination from '../components/sections/SchoolsPage/Pagination';
import useDeepCompareEffect from 'use-deep-compare-effect';
import SwitchViewLink from '../components/sections/SchoolsPage/SwitchViewLink';
import { BsMap } from 'react-icons/bs/index';
import { PER_PAGE } from '../utils/pagination';
import {
  SearchErrorInfo,
  SearchNotFoundInfo,
} from '../components/sections/SchoolsPage/SearchInfo';

const QueryRow = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  & > *:first-of-type {
    margin-right: 20px;
    width: 100%;
    min-width: 210px;

    @media (max-width: 1100px) {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Count = styled.small`
  display: block;
  margin: 1em 0 2em 0;
`;

const ResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3em;
  grid-row-gap: 3em;
  margin-top: 2em;
  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const LoadingCard = styled(Card)`
  ${createPlaceholderStyles()}
  height: 200px;
  box-shadow: none;
  &::after {
    background: #eee;
  }
`;

const Results: FC<any> = ({ schools, error, page, count, onPageChange }) => {
  if (error) return <SearchErrorInfo />;

  if (schools && schools.length === 0) return <SearchNotFoundInfo />;

  if (!schools)
    return (
      <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </>
    );

  return (
    <>
      <ResultsWrapper>
        {schools.map((school: School) => (
          <SchoolCard key={school.id} school={school} />
        ))}
        }
      </ResultsWrapper>
      {schools.length > PER_PAGE && (
        <Pagination page={page} count={count} onPageChange={onPageChange} />
      )}
    </>
  );
};

const SchoolsGridPage = (props: RouteComponentProps) => {
  const currUrl = new URL(window.location.href);
  const p = currUrl.searchParams;
  const [query, setQuery] = useState(deserializeQuery(p));
  const [page, setPage] = useState(deserializePage(p));
  const [dropdownFilters, setDropdownFilters] = useState(
    deserializeFilters(p, filters),
  );

  const searchData = {
    query,
    page,
    ...dropdownFilters,
  };
  const { data, error } = useSchools(searchData);

  useDeepCompareEffect(() => {
    currUrl.search = serializeSearchData(searchData, 'search');
    window.history.replaceState(null, '', currUrl.toString());
  }, [currUrl, searchData]);

  const schools = data?.schools;
  const count = data?.count;
  return (
    <Layout>
      <Container>
        <PageTitle>Znajdź swoją wymarzoną szkołę</PageTitle>
        <SwitchViewLink label="Widok mapy" icon={BsMap} viewPath={'map'} />
        <QueryRow>
          <QueryFilter query={query} onQueryChange={setQuery} />
          <DropdownFilters
            filtersValues={dropdownFilters}
            onFiltersValuesChange={setDropdownFilters}
          />
        </QueryRow>
        {schools && <Count>Liczba wyników: {count}</Count>}
        <Results
          schools={schools}
          error={error}
          page={page}
          count={count}
          onPageChange={setPage}
        />
      </Container>
    </Layout>
  );
};

export default SchoolsGridPage;
