import React from 'react';
import styled from '../styling/styled';

type LandingPageImageProps = {
  bgImage: string;
  position?: 'left' | 'right';
};

const LandingPageImage = styled.div<LandingPageImageProps>`
  background-image: url("${props => props.bgImage}");
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 780px) {
    min-height: 300px;
    background-position: center;
  }
`;

export default (props: LandingPageImageProps) => (
  <LandingPageImage {...props} />
);
