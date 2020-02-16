import React, { FC } from 'react';
import styled from '../styling/styled';

interface JumbotronProps {
  bgImage: string;
  bgPosition: string;
  dark?: boolean;
}

const JumbotronWrapper = styled.div<JumbotronProps>`
  min-height: 40vh;
  padding: 2em;
  border-radius: 10px;
  margin-top: 2em;
  background: ${props =>
    props.bgPosition
      ? 'linear-gradient(to left, transparent, rgba(0,0,0,0.7))'
      : 'transparent'};
  color: white;
  position: relative;
  &::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url("${props => props.bgImage}");
    background-size: cover;
    background-position: ${props => props.bgPosition ?? 'center center'};
    border-radius: 10px;
    // opacity: .4;
  }
`;
const JumbotronContent = styled.div`
  margin: 2em;
  width: 50%;
  h3 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
`;

const Jumbotron: FC<JumbotronProps> = props => (
  <JumbotronWrapper bgImage={props.bgImage} bgPosition={props.bgPosition}>
    <JumbotronContent>{props.children}</JumbotronContent>
  </JumbotronWrapper>
);

export default Jumbotron;
