import React, { FC, useState } from 'react';
import { Link } from '@reach/router';
import { BsX, BsThreeDots } from 'react-icons/bs';
import styled from '../styling/styled';
import Container from './Container';
import Logo from './Logo';
import getPathWithPreservedParams from '../utils/url';

const WideContainer = styled(Container)`
  width: calc(100% - 5rem);
`;

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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 6rem;
`;
const Nav = styled.nav`
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Menu = styled.ul<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  @media (max-width: 1200px) {
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
    @media (max-width: 1200px) {
      display: block;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

interface NavbarProps {
  wide?: boolean;
}

const Navbar: FC<NavbarProps> = ({ wide }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const isSearchPage = window.location.pathname.startsWith('/schools');
  const getSearchLink = (viewPath: string) => {
    const path = `/schools/${viewPath}`;
    return isSearchPage ? getPathWithPreservedParams(path) : path;
  };

  const menuItems: [string, string][] = [
    ['Home', '/'],
    ['Szkoły', getSearchLink('grid')],
    ['Mapa', getSearchLink('map')],
    ['Ulubione', '/favourite-schools'],
    ['O nas', '/about-us'],
    ['Kalkulator punktów', '/calculator'],
  ];

  const ContainerComponent = wide ? WideContainer : Container;

  return (
    <NavWrapper>
      <ContainerComponent>
        <Nav>
          <MobileBar>
            <Brand to="/">
              <Logo />
              Warsaw
              <span>LO</span>
            </Brand>
            <button className="menu-icons" onClick={() => setNavOpen(!isNavOpen)} type="button">
              {isNavOpen ? <BsX /> : <BsThreeDots />}
            </button>
          </MobileBar>
          <Menu active={isNavOpen}>
            {menuItems.map(([title, link]) => (
              <MenuItem key={link}>
                <Link to={link}>{title}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Nav>
      </ContainerComponent>
    </NavWrapper>
  );
};

export default Navbar;
