import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Link from "next/link";

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

const index = ({ posts }: Posts) => {
	console.log(posts);
	console.log("what am i", posts);
	return (
		<div>
			<h1>Welcome to my blurg</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.filePath}>
						<Link
							as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
							href={`/blog/[title]`}
						>
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
