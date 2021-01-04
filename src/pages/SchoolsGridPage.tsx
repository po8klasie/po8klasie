import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { BsMap } from 'react-icons/bs/index';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import QueryFilter from '../components/sections/SchoolsPage/QueryFilter';
import { useSchools } from '../api/schools';
import styled from '../styling/styled';
import DropdownFilters from '../components/sections/SchoolsPage/DropdownFilters';
import {
  deserializeFilters,
  deserializePage,
  deserializeQuery,
  serializeSearchData,
} from '../utils/search';
import { filters } from '../data/filters';
import Pagination from '../components/sections/SchoolsPage/Pagination';
import SwitchViewLink from '../components/sections/SchoolsPage/SwitchViewLink';
import Results from '../components/sections/SchoolsPage/Results';
import QueryRow from '../components/QueryRow';

const Count = styled.small`
  display: block;
  margin: 1em 0 2em 0;
`;

const SchoolsGridPage: FC<RouteComponentProps> = () => {
  const currUrl = new URL(window.location.href);
  const p = currUrl.searchParams;
  const [query, setQuery] = useState(deserializeQuery(p));
  const [page, setPage] = useState(deserializePage(p));
  const [dropdownFilters, setDropdownFilters] = useState(deserializeFilters(p, filters));

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
        <SwitchViewLink label="Widok mapy" icon={BsMap} viewPath="map" />
        <QueryRow>
          <QueryFilter query={query} onQueryChange={setQuery} />
          <DropdownFilters
            filtersValues={dropdownFilters}
            onFiltersValuesChange={setDropdownFilters}
          />
        </QueryRow>
        {schools && <Count>Liczba wyników: {count}</Count>}
        <Results schools={schools} error={error} />
        <Pagination page={page} count={count} onPageChange={setPage} disabled={!data} />
      </Container>
    </Layout>
  );
};

export default SchoolsGridPage;
