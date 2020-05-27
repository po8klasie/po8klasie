import React, {createElement, useEffect, useLayoutEffect, useRef, useState} from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from '../styling/styled';
import {connect, useSelector} from 'react-redux';
import { fetchSchools } from '../store/modules/schools';
// import FiltersControl from '../components/schoolsPage/SearchFiltersControler';
// import { InputWithAddon } from '../components/Input';
// import SchoolCard from '../components/SchoolCard';
// import Card from '../components/Card';
// import { createPlaceholderStyles } from '../utils/loading';
// import Pagination from '../components/Pagination';
// import { useSearch } from '../hooks/useSearch';
import PageTitle from '../components/PageTitle';
import {DEFAULT_VIEW, searchViews} from '../data/searchViews';
// import SearchOrderingController from '../components/schoolsPage/SearchOrderingControl';
// import { BehaviorSubject } from 'rxjs';
import SearchQueryController from '../components/schoolsPage/SearchQueryController';
import {getSearchDataFromParams, toParams} from '../utils/params';
// import SearchViewController from '../components/schoolsPage/SearchViewControl';
// import { frontendOnlyParams } from '../data/paramsOverwrites';
import SearchPaginationController from '../components/schoolsPage/SearchPaginationController';
import SearchViewController from "../components/schoolsPage/SearchViewController";
import SearchOrderingController from "../components/schoolsPage/SearchOrderingController";
import SearchFiltersController from "../components/schoolsPage/SearchFiltersController";
// import { useParamsChangeHandler } from '../hooks/useParamsChangeHandler';

const Count = styled.small`
  display: block;
  margin: 1em 0 2em 0;
`;

const AdditionalOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  & > div:first-of-type {
    display: inline-flex;
  }
`;

interface SchoolsPageProps extends RouteComponentProps {}

const SchoolsPage = (props: any) => {
  const { searchData } = useSelector((state: any) => ({
    searchData: state.schools.searchData
  }));
  useLayoutEffect(() => {
    props.fetchSchools({
      searchData: getSearchDataFromParams(props.location.search)
    });
  }, []);
  useEffect(() => {
    const params = toParams(searchData, 'search');
    navigate(`?${params}`);
  }, [searchData])
  // useParamsChangeHandler({
  //   payload$: payload$.current,
  //   excludeKeys: [],
  //   deps: [view],
  //   onParamsChange: (prevData: any, data: any) => {
  //     const params = toParams(data, 'search');
  //     navigate(`?${params}`);
  //     console.log(data, page);
  //     let currentView = view;
  //     console.log(view.id, data.view);
  //     if (view.id !== data.view) {
  //       console.log('changed');
  //       let v = searchViews.find(v => v.id === data.view);
  //       if (!v) return;
  //       currentView = v;
  //       setView(currentView);
  //     }
  //     console.log(data.page);
  //     setPage(data.page);
  //
  //     // const dontFetch = Boolean(frontendOnlyParams.find(p => lastData.current && lastData.current[p] !== data[p]));
  //     // lastData.current = data;
  //     // if(dontFetch)
  //     //   return;
  //     props.fetchSchools({
  //       params: data,
  //       fetchAll: !currentView.layout || !currentView.layout.enablePagination,
  //     });
  //   },
  // });

  // const showAll = !view.layout || !view.layout.enablePagination;
  // const schoolsPerCurrentPage =
  //   props.schools.results && props.schools.results[page]
  //     ? props.schools.results[page]
  //     : [];
  // const schools = showAll
  //   ? props.schools.results.flat()
  //   : schoolsPerCurrentPage;
  // console.log(schools, page);
  // @ts-ignore
  const view = searchViews.find(v => v.id === props.schools.searchData.view) ?? DEFAULT_VIEW;

  return (
    <Layout>
      <Container>
        <PageTitle>Znajdź swoją wymarzoną szkołę</PageTitle>

        <SearchQueryController />
        <SearchFiltersController />
        <AdditionalOptions>
          <div>
            <SearchOrderingController />
          </div>
          <SearchViewController />
        </AdditionalOptions>
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
