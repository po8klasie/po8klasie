import styled from '../styling/styled';

const DoubleGrid = styled.div<{ reversed?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px auto;
  grid-template-areas: ${(props) =>
    props.reversed
      ? `
      "image title"
      "image text"
    `
      : `
      "title image"
      "text image"
    `};
  h2 {
    grid-area: title;
  }
  p {
    grid-area: text;
  }
  div {
    grid-area: image;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'image'
      'text';
  }
`;

export default DoubleGrid;
