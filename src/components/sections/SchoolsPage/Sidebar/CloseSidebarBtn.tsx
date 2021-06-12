import styled from '../../../../styling/styled';

const CloseSidebarBtn = styled.button<{ onClick: () => void }>`
  display: none;
  @media (max-width: 780px) {
    display: block;
    font-size: 2rem;
    font-family: inherit;
    color: ${(props) => props.theme.colors.primary};
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin-left: auto;
    svg {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default CloseSidebarBtn;
