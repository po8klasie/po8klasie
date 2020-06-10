import React from 'react';
import styled from '../styling/styled';
import theme from '../styling/theme';

type IconProps = {
  color: 'primary' | 'secondary';
  size?: number;
  icon: any;
};
export default (props: IconProps) => {
  const StyledIcon = styled(props.icon)`
    width: ${props.size ? props.size : '3em'};
    fill: ${props.color
      ? theme.colors[props.color]
        ? theme.colors[props.color]
        : props.color
      : '#000'};
  `;
  return <StyledIcon {...props} />;
};
