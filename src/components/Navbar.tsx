import React, { FC, useState } from 'react';
import styled from '../styling/styled';
import { Link } from '@reach/router';
import Container from './Container';
import Logo from './Logo';
import { getPathWithPreservedParams } from '../utils/url';
import { BsX, BsThreeDots } from 'react-icons/bs';

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
      fill: ${(props) => props.theme.colors.primary};
    }
  }
  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;
const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2000;
  background: white;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 75%;
    transform: translateX(-50%);
    height: 1px;
    background: black;
    @media (max-width: 780px) {
      content: none;
    }
  }
  @media (max-width: 780px) {
    border-bottom: 1px solid black;
  }
`;
const Nav = styled.nav`
  height: 6em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Menu = styled.ul<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  @media (max-width: 780px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding-inline-start: 0;
    background: white;
    text-align: center;
    border-bottom: 1px solid black;
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;
const MenuItem = styled.li`
  display: block;
  margin: 0 2em;
  color: rgba(0, 0, 0, 0.6);
  a {
    text-decoration: none;
    transition: color 0.3s;
  }
  @media (max-width: 780px) {
    padding: 1em 0;
  }
`;
const MobileBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menu-icons {
    color: ${(props) => props.theme.colors.primary};
    display: none;

    svg {
      width: 2em;
      height: 2em;
    }

    @media (max-width: 780px) {
      display: block;
    }
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;
const Navbar: FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const isSearchPage = window.location.pathname.startsWith('/schools');
  const getSearchLink = (viewPath: string) => {
    const path = `/schools/${viewPath}`;
    return isSearchPage ? getPathWithPreservedParams(path) : path;
  };

  return (
    <NavWrapper>
      <Container>
        <Nav>
          <MobileBar>
            <Brand to="/">
              <Logo />
              Warsaw
              <span>LO</span>
            </Brand>
            <span className="menu-icons" onClick={() => setNavOpen(!isNavOpen)}>
              {isNavOpen ? <BsX /> : <BsThreeDots />}
            </span>
          </MobileBar>
          <Menu active={isNavOpen}>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to={getSearchLink('grid')}>Szkoły</Link>
            </MenuItem>
            <MenuItem>
              <Link to={getSearchLink('map')}>Mapa</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/calculator">Kalkulator punktów</Link>
            </MenuItem>
          </Menu>
        </Nav>
      </Container>
    </NavWrapper>
  );
};

export default Navbar;
