import styled from '../styling/styled';

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default FeaturesGrid;
