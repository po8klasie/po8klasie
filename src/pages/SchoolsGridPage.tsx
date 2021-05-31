import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { BsMap } from 'react-icons/bs';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { useSchools } from '../api/schools';
import styled from '../styling/styled';
import {
  deserializeFilters,
  deserializePage,
  deserializeQuery,
  serializeSearchData,
} from '../utils/search';
import { filters as filtersDefinition } from '../data/filters';
import Pagination from '../components/sections/SchoolsPage/Pagination';
import SwitchViewLink from '../components/sections/SchoolsPage/SwitchViewLink';
import Results from '../components/sections/SchoolsPage/Results';
import Sidebar from '../components/sections/SchoolsPage/Sidebar/Sidebar';
import SidebarWrapper from '../components/sections/SchoolsPage/Sidebar/SidebarWrapper';
import useBasicPageViewTracker from '../hooks/useBasicPageViewTracker';
import SEO from '../components/SEO';
import useFilters from '../hooks/useFilters';
import { convertFilterStateToObject } from '../utils/filters';

const Flex = styled.div`
  display: flex;
`;
const ContentWrapper = styled(Container)`
  margin-left: 25vw;
  padding: 0 4rem 4rem;
  @media (min-width: 1800px) {
    padding-left: 0;
  }
`;

const SchoolsGridPage: FC<RouteComponentProps> = () => {
  useBasicPageViewTracker();
  const currUrl = new URL(window.location.href);
  const p = currUrl.searchParams;
  const [query, setQuery] = useState(deserializeQuery(p));
  const [page, setPage] = useState(deserializePage(p));
  const filters = useFilters(filtersDefinition, deserializeFilters(p, filtersDefinition));
  const searchData = {
    query,
    page,
    ...convertFilterStateToObject(filters.filtersState),
  };
  const { data, error } = useSchools(searchData);

  useDeepCompareEffect(() => {
    currUrl.search = serializeSearchData(searchData, 'search');
    window.history.replaceState(null, '', currUrl.toString());
  }, [currUrl, searchData]);

  const schools = data?.schools;
  const count = data?.count;

  return (
    <Layout hideFooter noTopMargin>
      <SEO title="Przeglądaj listę szkół" />
      <Flex>
        <SidebarWrapper>
          <Sidebar
            filters={filters}
            query={query}
            onQueryChange={setQuery}
            count={count}
            switchViewLinkElement={
              <SwitchViewLink label="Widok mapy" icon={BsMap} viewPath="map" />
            }
          />
        </SidebarWrapper>
        <ContentWrapper>
          <Results schools={schools} error={error} />
          <Pagination page={page} count={count} onPageChange={setPage} disabled={!data} />
        </ContentWrapper>
      </Flex>
    </Layout>
  );
};

export default SchoolsGridPage;
