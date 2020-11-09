import styled from '../../../styling/styled';
import Card from '../../Card';
import { createPlaceholderStyles } from '../../../utils/loading';

export const FavouriteSchoolWrapper = styled(Card)`
  margin-bottom: 50px;
  padding: 30px;
  .top {
    display: grid;
    grid-template-columns: auto 200px;
    @media (max-width: 780px) {
      display: flex;
      flex-direction: column;
    }
  }
  .top-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 16px;
    @media (max-width: 780px) {
      order: -1;
    }
  }
  .school-type {
    display: block;
    font-size: 1em;
    color: #707070;
    text-transform: uppercase;
  }
  h4 {
    margin-top: 0.3em;
    margin-bottom: 0;
    font-size: 1.8em;
    color: ${(props) => props.theme.colors.dark};
    & > a {
      color: ${(props) => props.theme.colors.text};
      text-decoration: none;
    }
  }
  .district {
    display: block;
    font-size: 1em;
    color: ${(props) => props.theme.colors.dark};
    text-transform: uppercase;
    margin: 1em 0;
  }
  .content {
    flex: 1 0 auto;
  }
  a {
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
  h5 {
    font-size: 1.25em;
    margin: 1em 0 0.5em 0;
  }
  li {
    color: #6383e2;
    span {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.125em;
    }
    .points {
      float: right;
      font-weight: bold;
      color: ${(props) => props.theme.colors.dark};
    }
  }
`;

export const LoadingCard = styled(Card)`
  ${createPlaceholderStyles()};
  height: 150px;
  box-shadow: none;
  margin-bottom: 50px;
  &::after {
    background: #eee;
  }
`;
