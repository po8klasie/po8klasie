import React, {forwardRef, HTMLProps} from 'react';
import styled from '../../../../styling/styled';

interface SidebarSectionProps {
  hideBottomBorder?: boolean;
}

const SidebarSection = styled.div<SidebarSectionProps>`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => (props.hideBottomBorder ? 'transparent' : '#C4C4C4')};
`;

export const SidebarSectionWithoutBorder = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((props, ref) => (
  <SidebarSection {...props} hideBottomBorder ref={ref} />
));

export const SidebarTitle = styled.h4`
  font-size: 1.2rem;
`

export default SidebarSection;
