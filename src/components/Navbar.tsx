import React, { FC } from 'react';
import Container from './Container';
import styled from '../styling/styled';
import { Link } from '@reach/router';

const Brand = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5em;
  margin-right: 2em;
`;
const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;
const Nav = styled.nav`
  height: 5em;
  display: flex;
  justify-content: space-between;
  background: white;
  * {
    font-family: ${props => props.theme.fonts.primary};
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
`;
const MenuItem = styled.li`
  display: block;
  margin: 0 2em;
  color: rgba(0, 0, 0, 0.6);
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
  }
  a:hover {
    color: black;
  }
`;
const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ActionText = styled.span``;
const ActionButton = styled(Link)`
  margin-left: 2em;
  padding: 0.5em 1em;
  background: black;
  color: white;
  border-radius: 2em;
  text-decoration: none;
`;
const Navbar: FC = props => (
  <NavWrapper>
    <Container>
      <Nav>
        <FlexWrapper>
          <Brand to="/">WarsawLO</Brand>
          <Menu>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/schools">Szkoły</Link>
            </MenuItem>
            <MenuItem>Kalkulator punktów</MenuItem>
          </Menu>
        </FlexWrapper>
        <FlexWrapper>
          <ActionText>Zaloguj się</ActionText>
          <ActionButton to="/auth">Zarejestruj się</ActionButton>
        </FlexWrapper>
      </Nav>
    </Container>
  </NavWrapper>
);

export default Navbar;
