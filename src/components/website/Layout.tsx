import { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './styles/Layout.module.css';
import { ProjectsList } from './LandingPage/HeroSection';

interface LayoutProps {
  projectsList: ProjectsList;
}

const Layout: FC<LayoutProps> = ({ children, projectsList }) => (
  <div className={styles.layoutWrapper}>
    <Navbar navbarWrapperClassName="py-10" projectsList={projectsList} />
    {children}
    <Footer />
  </div>
);

export default Layout;
