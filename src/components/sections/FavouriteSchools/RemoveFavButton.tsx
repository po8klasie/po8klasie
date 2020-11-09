import styled from '../../../styling/styled';

const RemoveFavButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  padding: 4px 0;
  font-size: 1em;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  text-decoration: none;
  font-family: 'Open Sans';
`;

export default RemoveFavButton;
