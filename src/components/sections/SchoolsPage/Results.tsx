import React, { FC } from 'react';
import { ApolloError } from '@apollo/client';
import styled from '../../../styling/styled';
import { ErrorInfo, NotFoundInfo } from '../../Info';
import SchoolCard from '../../SchoolCard';
import { LoadingCard } from '../FavouriteSchools/FavouriteSchoolWrapper';
import { ISchoolListingQuery, ISchoolNode } from '../../../types/graphql';

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

interface ResultsProps {
  schools?: ISchoolListingQuery['allSchools'];
  error?: ApolloError;
}

const Results: FC<ResultsProps> = ({ schools, error }) => {
  if (error) return <ErrorInfo />;

  if (schools && schools.edges.length === 0) return <NotFoundInfo />;

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
      {(schools.edges as { node: ISchoolNode }[]).map(({ node }) => (
        <SchoolCard key={node.id} school={node} />
      ))}
    </ResultsWrapper>
  );
};

export default Results;
