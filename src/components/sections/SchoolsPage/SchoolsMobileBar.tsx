import styled from '../../../styling/styled';

const SchoolsMobileBar = styled.div`
  display: none;
  @media (max-width: 780px) {
    display: flex;
    padding: 30px 20px;
    justify-content: space-between;
  }
`;

export default SchoolsMobileBar;
