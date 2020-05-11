import styled from '../styling/styled';

const H1 = styled.h1`
  font-size: 4em;
  margin-top: 0;
  @media (max-width: 1100px) {
    font-size: 3em;
  }
  @media (max-width: 440px) {
    font-size: 2em;
  }
`;

export default H1;
