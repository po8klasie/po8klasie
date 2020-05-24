import React, {createElement, useLayoutEffect, useRef, useState} from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from '../styling/styled';
import { connect } from 'react-redux';
import { fetchSchools } from '../store/modules/schools';
import FiltersControl from '../components/schoolsPage/SearchFiltersControl';
import { InputWithAddon } from '../components/Input';
import SchoolCard from '../components/SchoolCard';
import Card from '../components/Card';
import { createPlaceholderStyles } from '../utils/loading';
import Pagination from '../components/Pagination';
import { useSearch } from '../hooks/useSearch';
import PageTitle from '../components/PageTitle';
import {defaultViewId, searchViews} from "../data/searchViews";
import SearchOrderingControl from "../components/schoolsPage/SearchOrderingControl";
import {BehaviorSubject} from "rxjs";
import SearchInputControl from "../components/schoolsPage/SearchInputControl";
import {toParams} from "../utils/params";
import SearchViewControl from "../components/schoolsPage/SearchViewControl";
import {frontendOnlyParams} from "../data/paramsOverwrites";
import SearchPaginationControl from "../components/schoolsPage/SearchPaginationControl";
import {useParamsChangeHandler} from "../hooks/useParamsChangeHandler";


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

const defaultView = searchViews.find(v => v.id === defaultViewId) as any;

const SchoolsPage = (props: any) => {
  const [view, setView] = useState(defaultView);
  const [page, setPage] = useState(1);
  const payload$ = useRef(new BehaviorSubject<any>({}));
  // const lastData = useRef<any>({});

  useLayoutEffect(() => {
    props.fetchSchools({
      params: {},
      fetchAll: !view.layout || !view.layout.enablePagination
    });
  }, []);
  useParamsChangeHandler({
    payload$: payload$.current,
    excludeKeys: [],
    deps: [view],
    onParamsChange: (prevData: any, data: any) => {
    const params = toParams(data, 'search');
    navigate(`?${params}`);
    console.log(data, page)
    let currentView = view;
    console.log(view.id, data.view)
    if(view.id !== data.view){
      console.log('changed')
      let v = searchViews.find(v => v.id === data.view)
      if(!v) return;
      currentView = v;
      setView(currentView);
    }
    console.log(data.page)
    setPage(data.page);

    // const dontFetch = Boolean(frontendOnlyParams.find(p => lastData.current && lastData.current[p] !== data[p]));
    // lastData.current = data;
    // if(dontFetch)
    //   return;
    props.fetchSchools({
      params: data,
      fetchAll: !currentView.layout || !currentView.layout.enablePagination
    });


  }
  })


  const showAll = !view.layout || !view.layout.enablePagination;
  const schoolsPerCurrentPage =
    props.schools.results && props.schools.results[page]
      ? props.schools.results[page]
      : [];
  const schools = showAll ? props.schools.results.flat() : schoolsPerCurrentPage;
  console.log(schools, page)
  // @ts-ignore
  return (
    <Layout>
      <Container>
        <PageTitle>Znajdź swoją wymarzoną szkołę</PageTitle>

        {/*<form onSubmit={handleSubmit}>*/}
        <SearchInputControl payload$={payload$.current}/>
        <FiltersControl payload$={payload$.current} />
          <AdditionalOptions>
            <div>
              <SearchOrderingControl payload$={payload$.current} active={view.layout && view.layout.enableOrdering} />
            </div>
              <SearchViewControl payload$={payload$.current} />
          </AdditionalOptions>
        {/*  /!*{!props.schools.isFetching && <Count>Liczba wyników: {props.schools.count}</Count>}*!/*/}
      </Container>
      {
        createElement(view.component, {
          schools,
          count: props.schools.count,
          isFetching: props.schools.isFetching,
          fetchedAll: props.schools.fetchedAll
        })
      }
      <Container>
        <SearchPaginationControl
            count={props.schools.count}
            schools={props.schools.results}
            payload$={payload$.current}
            active={view.layout && view.layout.enablePagination && !props.schools.isFetching && props.schools.count !== 0}
        />
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
