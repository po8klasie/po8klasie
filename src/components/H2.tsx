import styled from '../styling/styled';

interface H2Props {
  textAlign?: 'right' | 'center';
  children: string;
}

const H2 = styled.h2<H2Props>`
  font-size: 2.5em;
  text-align: ${(props) => props.textAlign || 'left'};
  @media (max-width: 880px) {
    text-align: left;
    font-size: 2em;
  }
`;

export default H2;
