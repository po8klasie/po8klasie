import { FC } from 'react';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import { ProjectConfig } from '../../config/types';

interface AppLayoutProps {
  projectAppearance?: ProjectConfig['appearance'];
  wideNavbar?: boolean;
  noFooter?: boolean;
}

const AppLayout: FC<AppLayoutProps> = ({ children, projectAppearance, wideNavbar, noFooter }) => (
  <div className="bg-appBg">
    <AppNavbar projectName={projectAppearance?.appName} wide={wideNavbar} />
    <main className="pt-navbarHeight">{children}</main>
    {!noFooter && <AppFooter />}
  </div>
);

export default AppLayout;
