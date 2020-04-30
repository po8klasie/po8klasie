import {Link} from "@reach/router";
import styled from "../styling/styled";

const CallToActionButton = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  padding: 1rem 1.375rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  margin: 3em auto 3em auto;
  font-size: 1.125em;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 7px 20px #2D1B5426;
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;

export default CallToActionButton;
