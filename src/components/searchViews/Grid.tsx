import React, {FC} from "react";
import SchoolCard from "../SchoolCard";
import {School} from "../../types";
import styled from "../../styling/styled";
import Card from "../Card";
import {createPlaceholderStyles} from "../../utils/loading";
import {SearchViewProps} from "../../data/searchViews";
import Container from "../Container";

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

const GridSearchView: FC<SearchViewProps> = ({isFetching, schools, count}) => {
    return (
        <Container>
            <Results>
                {isFetching && new Array(3).fill(null).map((_, i) => <LoadingCard key={i} />)}
                {!isFetching &&
                schools.map((school: School) => (
                    <SchoolCard key={school.id} school={school} />
                ))}
            </Results>
            {!isFetching && count === 0 && (
                <p>Brak szkół o podanych kryteriach</p>
            )}
        </Container>
    );
};

export default GridSearchView;
