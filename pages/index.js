import Head from "next/head";

import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Resume from "./Resume";
import Footer from "./Footer";

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Welcome to Andrew Pagan's personal website"
				/>
				<meta
					name="keywords"
					content="Andrew,Pagan,portfolio,frontend,engineer,software"
				/>
				<meta name="author" content="Andrew Pagan" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Andrew Pagan</title>
				<link rel="canonical" href="http://www.andrewpagan.com" />
				<html lang="en" />
			</Head>

			<Navigation></Navigation>

			<Introduction></Introduction>
			<Resume></Resume>
			<Footer></Footer>
		</>
	);
}
