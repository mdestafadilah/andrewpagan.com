import React from "react";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

const Layout = ({ children }) => {
	return (
		<>
			<Navigation></Navigation>
			<div>{children}</div>
			<Footer></Footer>
		</>
	);
};

export default Layout;
