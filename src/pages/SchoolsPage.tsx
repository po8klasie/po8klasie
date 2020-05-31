import React, {
  createElement,
  useEffect,
  useLayoutEffect,
} from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { connect, useSelector } from 'react-redux';
import styled from '../styling/styled';
import { fetchSchools } from '../store/modules/schools';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import { DEFAULT_VIEW, searchViews } from '../data/searchViews';
import { getSearchDataFromParams, toParams } from '../utils/params';

import SearchQueryController from '../components/search/controllers/SearchQueryController';
import SearchPaginationController from '../components/search/controllers/SearchPaginationController';
import SearchViewController from '../components/search/controllers/SearchViewController';
import SearchOrderingController from '../components/search/controllers/SearchOrderingController';
import SearchFiltersController from '../components/search/controllers/SearchFiltersController';

// const Count = styled.small`
//   display: block;
//   margin: 1em 0 2em 0;
// `;

const QueryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;

    & > div {
      margin-right: 10px;

      @media (max-width: 690px) {
        margin: 0 0 10px 0;
      }
    }
    @media (max-width: 690px) {
      display: block;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 690px) {
    display: block;
  }
`;

interface SchoolsPageProps extends RouteComponentProps {}

const SchoolsPage = (props: any) => {
  const { searchData } = useSelector((state: any) => ({
    searchData: state.schools.searchData,
  }));
  useLayoutEffect(() => {
    props.fetchSchools({
      searchData: getSearchDataFromParams(props.location.search),
    });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const params = toParams(searchData, 'search');
    navigate(`?${params}`);
  }, [searchData]);
  const view =
    searchViews.find(v => v.id === props.schools.searchData.view) ??
    DEFAULT_VIEW;

  return (
    <Layout>
      <Container>
        <PageTitle>Znajdź swoją wymarzoną szkołę</PageTitle>
        <QueryRow>
          <div>
            <div>
              <SearchQueryController />
            </div>
            <SearchOrderingController />
          </div>
          <SearchViewController />
        </QueryRow>
        <SearchFiltersController />
        {/*  /!*{!props.schools.isFetching && <Count>Liczba wyników: {props.schools.count}</Count>}*!/*/}
      </Container>
      {createElement(view.component)}
      <Container>
        <SearchPaginationController />
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state: any): any => ({
  schools: state.schools,
});
const mapDispatchToProps = {
  fetchSchools,
};
export default connect<any, any, SchoolsPageProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolsPage);
