import styled from '../styling/styled';

const LandingMainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    & div {
     background-position: center;
    }
  }
`;

export default LandingMainGrid;
