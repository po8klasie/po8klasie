import { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './styles/Layout.module.css';

const Layout: FC = ({ children }) => (
  <div className={styles.layoutWrapper}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;