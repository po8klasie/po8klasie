import styled from '../styling/styled';

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 3px 12px #00000026;
  border-radius: 20px;
  & img {
    width: 100px;
    height: 100px;
  }
`;

export default Feature;
