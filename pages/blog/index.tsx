import Head from "next/head";
import { attributes, react as HomeContent } from "./../../content/home.md";

interface Cat {
	name: string;
	description: string;
}

const Blog = () => {
	let { title, cats } = attributes;

	return (
		<>
			<Head>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
			<article>
				<h1>{title}</h1>
				<HomeContent />
				<ul>
					{cats.map((cat: Cat, index: number) => (
						<li key={index}>
							<h2>{cat.name}</h2>
							<p>{cat.description}</p>
						</li>
					))}
				</ul>
			</article>
		</>
	);
};

export default Blog;
