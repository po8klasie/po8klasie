import { FC } from 'react';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

const AppLayout: FC = ({ children }) => (
  <div className="bg-appBg">
    <AppNavbar />
    <main className="pt-20 lg:pt-32">{children}</main>
    <AppFooter />
  </div>
);

export default AppLayout;
