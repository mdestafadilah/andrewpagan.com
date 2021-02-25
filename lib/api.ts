import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_blog-posts");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.mdx$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.mdx`);
	const fileContents = await require(fullPath);

	// const meta = await extractMdxMeta(fileContents);

	console.log("WHATRDFA", fileContents);

	// type Items = {
	// 	[key: string]: string;
	// };

	// const items: Items = {};

	// // Ensure only the minimal needed data is exposed
	// fields.forEach((field) => {
	// 	if (field === "slug") {
	// 		items[field] = realSlug;
	// 	}

	// 	if (meta[field]) {
	// 		items[field] = meta[field];
	// 	}
	// });

	return meta;
}

export async function getAllPosts(fields = []) {
	const slugs = getPostSlugs();

	const posts = slugs.map((slug) => getPostBySlug(slug, fields));
	console.log("AAA posts", posts);

	return slugs;
}
