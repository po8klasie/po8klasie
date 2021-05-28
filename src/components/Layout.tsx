import React, { FC } from 'react';
import styled from '../styling/styled';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Content = styled.div<{ flex?: boolean; noTopMargin?: boolean }>`
  flex: 1 0 auto;
  margin-top: ${props => props.noTopMargin ? '6rem' : '8rem'};
  ${(props) =>
    props.flex &&
    `
    display: flex;
    flex-direction: column;
  `}
`;
const FooterWrapper = styled.div`
  flex-shrink: 0;
`;

interface LayoutProps {
  wideNavbar?: boolean;
  contentFlex?: boolean;
  hideFooter?: boolean;
  noFooterMargin?: boolean;
  noTopMargin?: boolean;
}

const Layout: FC<LayoutProps> = ({
  wideNavbar,
  contentFlex,
  hideFooter,
  noFooterMargin,
  noTopMargin,
  children,
}) => (
  <LayoutWrapper>
    <Navbar wide={wideNavbar} />
    <Content flex={contentFlex} noTopMargin={noTopMargin}>{children}</Content>
    {!hideFooter && (
      <FooterWrapper>
        <Footer noFooterMargin={noFooterMargin} />
      </FooterWrapper>
    )}
  </LayoutWrapper>
);

export default Layout;
