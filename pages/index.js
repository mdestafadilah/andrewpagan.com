import Head from "next/head";

import Navigation from "./Navigation";
import Resume from "./Resume";
import Footer from "./Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Andrew Pagan</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navigation></Navigation>
			<Resume></Resume>
			<Footer></Footer>
		</>
	);
}
