import styled from '../styling/styled';
import Card from './Card';
import { createPlaceholderStyles } from '../utils/loading';

const LoadingCard = styled(Card)`
  ${createPlaceholderStyles()}
  height: 200px;
  box-shadow: none;
  margin-bottom: 3em;
  &::after {
    background: #eee;
  }
`;

export default LoadingCard;
