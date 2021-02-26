import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Link from "next/link";
import Head from "next/head";

interface PostData {
	author: string;
	description: string;
	title: string;
}
interface Post {
	content: string;
	data: PostData;
	filePath: string;
}

interface Posts {
	posts: Post[];
}

const formatPath = (post: Post) => {
	return `/blog/${post.filePath.replace(/\.mdx?$/, "")}`;
};

const index = ({ posts }: Posts) => {
	return (
		<div>
			<Head>
				<title>The Blog</title>
			</Head>
			<h1>Welcome to my blurg</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.filePath}>
						<Link as={formatPath(post)} href={`/blog/[slug]`}>
							<a>{post.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default index;

export function getStaticProps() {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
		const { content, data } = matter(source);

		return { content, data, filePath };
	});

	return { props: { posts } };
}
