import styled from '../../../../styling/styled';

const SidebarWrapper = styled.div`
  width: 25vw;
  height: calc(100vh - 6rem);
  max-width: 400px;
  position: fixed;
  top: 6rem; // navbar height
  left: 0;
  z-index: 1;
`;

export default SidebarWrapper;
