import React from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import styles from './Layout.module.scss';
import { useRouter } from 'next/router';
interface LayoutProps {
  children: React.ReactNode;
}

const hideNavigationAndFooter = (route: string) => {
  switch (route) {
    case '/links':
      return true;
    default:
      return false;
  }
};

const Layout = ({ children }: LayoutProps) => {
  const { route } = useRouter();
  const isHidden = hideNavigationAndFooter(route);

  return (
    <>
      {!isHidden && <Navigation />}
      <div className={styles.main}>{children}</div>
      {!isHidden && <Footer />}
    </>
  );
};

export default Layout;
