import styled from '../../../../styling/styled';

interface SidebarWrapperProps {
  isOpenOnMobile?: boolean;
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  width: 25vw;
  height: calc(100vh - 6rem);
  max-width: 400px;
  position: fixed;
  top: 6rem; // navbar height
  left: 0;
  z-index: 1;
  @media (max-width: 780px) {
    position: absolute;
    width: 290px;
    z-index: 1100;
    display: ${(props) => (props.isOpenOnMobile ? 'block' : 'none')};
  }
`;

export default SidebarWrapper;
