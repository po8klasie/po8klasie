import React, { forwardRef, HTMLProps } from 'react';
import styled from '../../../../styling/styled';

interface SidebarSectionProps {
  hideBottomBorder?: boolean;
}

const SidebarSection = styled.div<SidebarSectionProps>`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid ${(props) => (props.hideBottomBorder ? 'transparent' : '#C4C4C4')};
`;

export const SidebarSectionWithoutBorder = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => <SidebarSection {...props} hideBottomBorder ref={ref} />,
);

export const SidebarTitle = styled.h4<{ noMargin?: boolean }>`
  font-size: 1.4rem;
  padding: 0.2rem 0;
  ${(props) => props.noMargin && 'margin: 0;'}
  @media (max-width: 780px) {
    margin-top: 0;
  }
`;

export default SidebarSection;
