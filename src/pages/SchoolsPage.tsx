import React, { useLayoutEffect } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from '../styling/styled';
import { connect } from 'react-redux';
import { fetchSchools } from '../store/modules/schools';
import Filters from '../components/Filters';
import { InputWithAddon } from '../components/Input';
import SchoolCard from '../components/SchoolCard';
import Card from '../components/Card';
import { createPlaceholderStyles } from '../utils/loading';
import Pagination from '../components/Pagination';
import { useSearch } from '../hooks/useSearch';
import PageTitle from '../components/PageTitle';

const Results = styled.div`
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
const Count = styled.small`
  display: block;
  margin: 1em 0 2em 0;
`;

interface SchoolsPageProps extends RouteComponentProps {}

const SchoolsPage = (props: any) => {
  const {
    query,
    setQuery,
    filtersValues,
    setFiltersValues,
    currentPage,
    paginate,
    params$,
    payload$,
    submit,
  } = useSearch(props.location.search, props.schools);

  useLayoutEffect(() => {
    params$.subscribe(params => {
      navigate(`?${params}`);
    });

    payload$.subscribe(payload => {
      props.fetchSchools(payload);
    });
    // eslint-disable-next-line
  }, []);

  const handleQueryChange = (e: any) => setQuery(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submit();
  };

  const schoolsPerCurrentPage =
    props.schools.results && props.schools.results[currentPage]
      ? props.schools.results[currentPage]
      : [];

  return (
    <Layout>
      <Container>
        <PageTitle>Znajdź swoją wymarzoną szkołę</PageTitle>

        <form onSubmit={handleSubmit}>
          <InputWithAddon
            addon={<span className="material-icons">search</span>}
            addonPosition={'left'}
            placeholder="Szukaj szkoły"
            onChange={handleQueryChange}
            value={query}
          />

          <Filters
            filtersValues={filtersValues}
            setFiltersValues={setFiltersValues}
            onSubmit={submit}
          />
          {/*{!props.schools.isFetching && <Count>Liczba wyników: {props.schools.count}</Count>}*/}
          <Results>
            {props.schools.isFetching &&
              new Array(3).fill(null).map((_, i) => <LoadingCard key={i} />)}
            {!props.schools.isFetching &&
              schoolsPerCurrentPage.map((school: any) => (
                <SchoolCard key={school.id} school={school} />
              ))}
          </Results>
        </form>
        {props.schools.isFetching ||
          (props.schools.count !== 0 && (
            <Pagination
              count={props.schools.count}
              page={currentPage}
              onPaginate={paginate}
            />
          ))}
        {!props.schools.isFetching && props.schools.count === 0 && (
          <p>Brak szkół o podanych kryteriach</p>
        )}
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
