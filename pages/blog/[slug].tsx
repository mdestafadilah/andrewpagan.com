// import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import dynamic from "next/dynamic";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// import { useRouter } from "next/router";
// import { MDXProvider } from "@mdx-js/react";

const components = {
	h1: (props: string) => <h1 style={{ color: "tomato" }} {...props} />,
};

interface FrontMatter {
	author: string;
	description: string;
	title: string;
}

interface Props {
	source: object;
	frontMatter: FrontMatter;
}

const BlogPost: React.FC = ({ source, frontMatter }: Props) => {
	const content = hydrate(source, { components });

	return (
		<div>
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

export const getStaticProps = async ({ params }) => {
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
