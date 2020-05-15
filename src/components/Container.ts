import styled from '@emotion/styled';

const Container = styled.div<{ narrow?: boolean }>`
  width: ${props => (props.narrow ? '40%' : '60%')};
  margin: auto;

  @media (max-width: 1540px) {
    width: 80%;
  }
`;

export default Container;
