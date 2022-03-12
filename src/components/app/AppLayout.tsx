import { FC } from 'react';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import { ProjectConfig } from '../../config/types';

interface AppLayoutProps {
  projectAppearance?: ProjectConfig['appearance'];
}

const AppLayout: FC<AppLayoutProps> = ({ children, projectAppearance }) => (
  <div className="bg-appBg">
    <AppNavbar projectName={projectAppearance?.appName} />
    <main className="pt-navbarHeight">{children}</main>
    <AppFooter />
  </div>
);

export default AppLayout;
