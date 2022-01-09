import { FC } from 'react';
import Navbar from '../website/Navbar';
import Footer from '../website/Footer';

const AppLayout: FC = ({ children }) => (
  <div className="bg-appBg">
    <Navbar navbarWrapperClassName="py-4" />
    <main className="pt-32">{children}</main>
    <Footer />
  </div>
);

export default AppLayout;
