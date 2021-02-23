import React from "react";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navigation></Navigation>
			<div>{children}</div>
			<Footer></Footer>
		</>
	);
};

export default Layout;
