import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { HighSchoolBadge } from '../components/SchoolTypeBadge';
import styled from '../styling/styled';
import { connect } from 'react-redux';
import { School } from '../types';
import { fetchSchools } from '../store/modules/schools';
import { Dispatch } from 'redux';
import Jumbotron from '../components/Jumbotron';

const FilterSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 2em;
  margin-top: 4em;
`;
const FilterMenu = styled.div`
  h3 {
    font-size: 1.5em;
    margin: 0;
  }
  & > div {
    position: sticky;
    top: 5em;
    background: white;
    z-index: 2;
    padding: 10px 0;
  }
`;
const ResultsAndSearch = styled.div``;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 5em;
  background: white;
  z-index: 2;
  padding: 10px 0;
`;
const Input = styled.input`
  padding: 0.5em 1em;
  background: rgba(230, 230, 230);
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 1.2em;
  outline: none;
  transition: 0.3s all;
  display: block;
  width: 50%;
  font-family: ${props => props.theme.fonts.secondary};
  &:focus {
    border: 2px solid rgb(230, 230, 230);
    width: 70%;
  }
`;
const Sorter = styled.button`
  padding: 0.5em 2em;
  border-radius: 2em;
  background: black;
  color: white;
  border: none;
  color: rgb(200, 200, 200);
  font-size: 1em;
  span {
    color: white;
    margin-left: 0.5em;
  }
`;
const Filters = styled.div`
  h4 {
    margin: 2em 0 10px 0;
  }
  ul {
    margin: 0;
    padding-inline-start: 0;
  }
  li {
    display: block;
    margin: 5px 0;
  }
`;
const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3em;
  grid-row-gap: 1em;
  margin-top: 2em;
`;

const SchoolItem = styled(Link)`
  position: relative;
  display: block;
  color: black;
  text-decoration: none;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center center;
    border-radius: 10px;
  }
  .info {
    margin: 1em 5px 0 5px;
    h5 {
      margin-top: 0.5em;
      color: #aaa;
    }
    h4 {
      margin: 0.4em 0 0.2em 0;
    }
  }
`;
const SchoolTypeBadgeWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

interface SchoolsPageProps extends RouteComponentProps {}

const SchoolsPage = (props: any) => {
  const [query, setQuery] = useState('');
  const handleQueryChange = (e: any) => setQuery(e.target.value);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(query);
    navigate(`?query=${query.split(' ').join('+')}`);
    props.fetchSchools({
      name: query,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const initialQuery = (params as any).get('query')
      ? (params as any).get('query')
      : '';
    setQuery(initialQuery);
    if (
      props.schools.schools.length === 0 ||
      props.schools.params.name !== initialQuery
    ) {
      props.fetchSchools({
        name: initialQuery.split(' ').join('+') || '',
      });
    }
  }, []);

  return (
    <Layout>
      <Container>
        <Jumbotron
          bgImage={require('../assets/images/mountain-road.jpg')}
          bgPosition="center center"
          dark
        >
          <h3>Jaki jest Twój cel podróży?</h3>
        </Jumbotron>
        <form onSubmit={handleSubmit}>
          <FilterSection>
            <FilterMenu>
              <div>
                <h3>Szkoły</h3>
                <Filters>
                  <h4>Filtruj szkoły:</h4>
                  <ul>
                    <li>Publiczne</li>
                    <li>Niepubliczne</li>
                  </ul>
                </Filters>
              </div>
            </FilterMenu>
            <ResultsAndSearch>
              <Search>
                <Input
                  placeholder="Szukaj szkoły"
                  onChange={handleQueryChange}
                  value={query}
                />
                <Sorter type="button">
                  Sort by: <span>name</span>
                </Sorter>
              </Search>
              <Results>
                {props.schools.isFetching && 'Loading...'}
                {!props.schools.isFetching &&
                  props.schools.schools.map((school: School) => (
                    <SchoolItem to={`/school/${school.school_name}`}>
                      <SchoolTypeBadgeWrapper>
                        <HighSchoolBadge />
                      </SchoolTypeBadgeWrapper>
                      <img
                        alt={'Szkoła'}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gimnazjum_i_Liceum_Batorego_w_Warszawie_2015.JPG/800px-Gimnazjum_i_Liceum_Batorego_w_Warszawie_2015.JPG"
                      />

                      <div className="info">
                        <h4>{school.school_name}</h4>
                        <h5>{school.address.district}</h5>
                      </div>
                    </SchoolItem>
                  ))}
              </Results>
            </ResultsAndSearch>
          </FilterSection>
        </form>
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state: any): any => ({
  schools: state.schools,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchSchools: (payload: any) => dispatch(fetchSchools(payload)),
});
export default connect<any, any, SchoolsPageProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolsPage);
