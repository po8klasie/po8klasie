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
// import SearchOrderingController from '../components/search/controllers/SearchOrderingController';
import SearchFiltersController from '../components/search/controllers/SearchFiltersController';

// const Count = styled.small`
//   display: block;
//   margin: 1em 0 2em 0;
// `;

const QueryRow = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  
  & > *:first-of-type {
    margin-right: 20px;
    width: 100%;
    min-width: 210px;
    
    @media(max-width: 1100px){
      margin-bottom: 10px;
    }
  }
  @media(max-width: 1100px){
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
        <SearchViewController />
        <QueryRow>
          <SearchQueryController />
            <SearchFiltersController />
        </QueryRow>

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
