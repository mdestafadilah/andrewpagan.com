// import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

const components = {
	h1: (props: string) => <h1 style={{ color: "tomato" }} {...props} />,
};

interface FrontMatter {
	author: string;
	description: string;
	title: string;
}

interface Source {
	compiledSource: string;
	renderedOutput: string;
	scope: FrontMatter;
}

interface Props {
	source: Source;
	frontMatter: FrontMatter;
}

const BlogPost = ({ source, frontMatter }: Props) => {
	console.log("AAA source", source);
	const content = hydrate(source, { components });

	return (
		<div>
			<Head>
				<title>{frontMatter.title}</title>
			</Head>
			<Link href="/blog">
				<a>Go back~</a>
			</Link>
			<div>
				<h1>{frontMatter.title}</h1>
				{frontMatter.description && <p>{frontMatter.description}</p>}
			</div>
			<main>{content}</main>
		</div>
	);
};

export default BlogPost;

interface Slug {
	slug: string;
}

interface Params {
	params: Slug;
}

export const getStaticProps = async ({ params }: Params) => {
	console.log("AAA params", params);
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await renderToString(content, {
		components,
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));
	// How is it reducing it to one?
	return {
		paths,
		fallback: false,
	};
};
