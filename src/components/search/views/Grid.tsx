import React, { FC } from 'react';
import styled from '../../../styling/styled';
import { School } from '../../../types';
import Container from '../../Container';
import Card from '../../Card';
import SchoolCard from '../../SchoolCard';
import { createPlaceholderStyles } from '../../../utils/loading';
import { useSelector } from 'react-redux';

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

const GridSearchView: FC = () => {
  const { isFetching, schools, count, page } = useSelector((state: any) => ({
    isFetching: state.schools.fetchingData.isFetching,
    schools: state.schools.results,
    count: state.schools.responseData.count,
    page: state.schools.searchData.page,
  }));
  // const page = 1;
  const schoolsPerCurrentPage = schools && schools[page] ? schools[page] : [];
  return (
    <Container>
      <Results>
        {isFetching &&
          new Array(3).fill(null).map((_, i) => <LoadingCard key={i} />)}
        {!isFetching &&
          schoolsPerCurrentPage.map((school: School) => (
            <SchoolCard key={school.id} school={school} />
          ))}
      </Results>
      {!isFetching && count === 0 && <p>Brak szkół o podanych kryteriach</p>}
    </Container>
  );
};

export default GridSearchView;
