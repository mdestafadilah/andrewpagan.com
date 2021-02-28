import React from "react";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import styles from "./Layout.module.scss";
interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navigation />
			<div className={styles.main}>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
