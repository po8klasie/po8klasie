import React, { FC } from 'react';
import styled from '../../../styling/styled';
import { ErrorInfo, NotFoundInfo } from '../../Info';
import { School } from '../../../types';
import SchoolCard from '../../SchoolCard';
import { LoadingCard } from '../FavouriteSchools/FavouriteSchoolWrapper';

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const Results: FC<any> = ({ schools, error }) => {
  if (error) return <ErrorInfo />;

  if (schools && schools.length === 0) return <NotFoundInfo />;

  if (!schools)
    return (
      <ResultsWrapper>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </ResultsWrapper>
    );

  return (
    <ResultsWrapper>
      {schools.map((school: School) => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </ResultsWrapper>
  );
};

export default Results;
