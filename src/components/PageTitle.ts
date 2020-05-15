import styled from '../styling/styled';

const PageTitle = styled.h1`
  font-size: 4em;
  margin-top: 0;
  @media (max-width: 1210px) {
    font-size: 3em;
  }
  @media (max-width: 520px) {
    font-size: 2em;
  }
`;

export default PageTitle;
