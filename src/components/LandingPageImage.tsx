import React from 'react';
import styled from '../styling/styled';

type LandingPageImageProps = {
  bgImage: string;
  position?: 'left' | 'right';
};

const LandingPageImage = styled.div<LandingPageImageProps>`
  background-image: url("${(props) => props.bgImage}");
  background-position: ${(props) => props.position};
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 300px;
  @media (max-width: 880px) {
    background-position: center;
    min-height: 200px;
  }
`;

export default (props: LandingPageImageProps) => <LandingPageImage {...props} />;
