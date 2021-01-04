import styled from '../styling/styled';

const QueryRow = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  & > *:first-of-type {
    margin-right: 20px;
    width: 100%;
    min-width: 210px;

    @media (max-width: 1100px) {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;

export default QueryRow;
