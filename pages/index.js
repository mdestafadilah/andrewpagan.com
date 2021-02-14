import Head from "next/head";

import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Home() {
	return (
		<>
			<Head>
				<title>Andrew Pagan</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navigation></Navigation>

			<Footer></Footer>
		</>
	);
}
