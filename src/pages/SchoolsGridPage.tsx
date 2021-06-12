import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { BsMap } from 'react-icons/bs';
import Layout from '../components/Layout';
import Container from '../components/Container';
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
import ToggleFiltersBtn from '../components/sections/SchoolsPage/ToggleFiltersBtn';
import SchoolsMobileBar from '../components/sections/SchoolsPage/SchoolsMobileBar';
import Results from '../components/sections/SchoolsPage/Results';
import Sidebar from '../components/sections/SchoolsPage/Sidebar/Sidebar';
import SidebarWrapper from '../components/sections/SchoolsPage/Sidebar/SidebarWrapper';
import useBasicPageViewTracker from '../hooks/useBasicPageViewTracker';
import SEO from '../components/SEO';
import useFilters from '../hooks/useFilters';
import { convertFilterStateToObject } from '../utils/filters';
import useSchoolsListing from '../api/schoolsListing';

const Flex = styled.div`
  display: flex;
`;
const ContentWrapper = styled(Container)`
  margin-left: 25vw;
  padding: 2rem 4rem 4rem;
  @media (max-width: 780px) {
    margin: auto;
    padding: 2rem 1.5rem 4rem;
  }
`;

const SchoolsGridPage: FC<RouteComponentProps> = () => {
  useBasicPageViewTracker();
  const currUrl = new URL(window.location.href);
  const p = currUrl.searchParams;
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState(deserializeQuery(p));
  const [page, setPage] = useState(deserializePage(p));
  const filters = useFilters(filtersDefinition, deserializeFilters(p, filtersDefinition));
  const [getSchools, { data, error }] = useSchoolsListing();

  const filtersObj = convertFilterStateToObject(filters.filtersState);

  useDeepCompareEffect(() => {
    // TODO: debounce
    const searchData = {
      query,
      page,
      ...filtersObj,
    };
    currUrl.search = serializeSearchData(searchData, 'search');
    window.history.replaceState(null, '', currUrl.toString());
    getSchools(query, filters.filtersState, page);
  }, [query, filtersObj, page]);

  const schools = data?.allSchools;
  const count = data?.allSchools?.totalCount;

  return (
    <Layout hideFooter noTopMargin>
      <SEO title="Przeglądaj listę szkół" />
      <SchoolsMobileBar>
        <ToggleFiltersBtn onClick={() => setSidebarOpen(true)} />
        <SwitchViewLink label="Widok mapy" icon={BsMap} viewPath="map" />
      </SchoolsMobileBar>
      <Flex>
        <SidebarWrapper isOpenOnMobile={sidebarIsOpen}>
          <Sidebar
            filters={filters}
            query={query}
            onQueryChange={setQuery}
            count={count}
            closeSidebar={() => setSidebarOpen(false)}
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
