import styled from '../styling/styled';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #000;
  text-decoration: none;
  box-shadow: 0px 3px 12px #00000026;
  border-radius: 20px;
  padding: 20px;
  background: #fff;

  &::after {
    content: '';
    position: absolute;
    display: block;
    top: -13px;
    left: -13px;
    width: 110px;
    height: 110px;
    background: #82eaac;
    border-radius: inherit;
    z-index: -1;
  }
`;

export default Card;
