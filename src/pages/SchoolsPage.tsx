import React, { useEffect, useState, Component } from 'react';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { badges, HighSchoolBadge } from '../components/SchoolTypeBadge';
import styled from '../styling/styled';
import { connect } from 'react-redux';
import { School } from '../types';
import { fetchSchools } from '../store/modules/schools';
import { Dispatch } from 'redux';
import Jumbotron from '../components/Jumbotron';
import Filters from '../components/Filters';
import Input, { InputWithAddon } from '../components/Input';
import SchoolCard from '../components/SchoolCard';
import Card from '../components/Card';
import { createPlaceholderStyles } from '../utils/loading';
import { getTotalPages } from '../utils/pagination';
import Pagination from '../components/Pagination';

const Header = styled.h1`
  font-size: 4em;
`;

const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3em;
  grid-row-gap: 3em;
  margin-top: 2em;
`;

const LoadingCard = styled(Card)`
  ${createPlaceholderStyles()}
  height: 200px;
  box-shadow: none;
  &::after {
    background: #eee;
  }
`;

interface SchoolsPageProps extends RouteComponentProps {}

const SchoolsPage = (props: any) => {
  console.log(props);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleQueryChange = (e: any) => setQuery(e.target.value);
  const params: any = {};
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(query);
    navigate(`?query=${query.split(' ').join('+')}`);
    props.fetchSchools({
      school_name: query,
    });
  };
  const paginate = (page: number) => {
    setCurrentPage(page);
    const p = new URLSearchParams(props.location.search);
    p.set('page', page.toString());
    navigate(`?${p.toString()}`);
    console.log(
      page,
      props.schools.results[page],
      !props.schools.results,
      !props.schools.results[page],
      props.schools.results[page].length === 0,
    );
    if (
      !props.schools.results ||
      !props.schools.results[page] ||
      props.schools.results[page].length === 0
    ) {
      console.log('load');
      props.fetchSchools({
        ...params,
        page,
      });
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const initialQuery = (params as any).get('query')
      ? (params as any).get('query')
      : '';
    setQuery(initialQuery);
    if (
      props.schools.results.length === 0 ||
      props.schools.params.name !== initialQuery
    ) {
      props.fetchSchools({
        school_name: initialQuery.split(' ').join('+') || '',
      });
    }
  }, []);

  const schoolsPerCurrentPage =
    props.schools.results &&
    props.schools.results[currentPage] &&
    props.schools.results[currentPage]
      ? props.schools.results[currentPage]
      : [];
  return (
    <Layout>
      <Container>
        <Header>Znajdź swoją wymarzoną szkołę</Header>

        <form onSubmit={handleSubmit}>
          <InputWithAddon
            addon={<span className="material-icons">search</span>}
            addonPosition={'left'}
            placeholder="Szukaj szkoły"
            onChange={handleQueryChange}
            value={query}
          />

          <Filters />
          <Results>
            {props.schools.isFetching && new Array(3).fill(<LoadingCard />)}
            {schoolsPerCurrentPage.map((school: any) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </Results>
        </form>
        <Pagination
          count={props.schools.count}
          page={currentPage}
          onPaginate={paginate}
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
