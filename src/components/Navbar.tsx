import React, { FC } from 'react';
import Container from './Container';
import styled from '../styling/styled';
import { Link } from '@reach/router';
import Logo from './Logo';

const Brand = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5em;
  margin-right: 2em;
  display: flex;
  align-items: center;
  svg {
    width: 2.5em;
    transform: translateY(-10%);
    margin-right: 0.2em;
    path {
      fill: ${props => props.theme.colors.primary};
    }
  }
  span {
    color: ${props => props.theme.colors.primary};
  }
`;
const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: white;
`;
const Nav = styled.nav`
  height: 7em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  * {
    font-family: Open Sans;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 110%;
    transform: translateX(-50%);
    height: 1px;
    background: black;
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
    text-decoration: none;
    transition: color 0.3s;
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
        <Brand to="/">
          <Logo />
          Warsaw
          <span>LO</span>
        </Brand>
        <Menu>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/schools">Szkoły</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/calculator">Kalkulator punktów</Link>
          </MenuItem>
        </Menu>
      </Nav>
    </Container>
  </NavWrapper>
);

export default Navbar;
