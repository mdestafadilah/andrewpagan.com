// For dynamic routing

import React from "react";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

import MDXDocument, { metadata } from "./test.mdx";

console.log(metadata);
console.log(MDXDocument);

const components = {
	h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
};

const BlogPost: React.FC = () => {
	const router = useRouter();
	const { title } = router.query;

	return (
		<MDXProvider components={components}>
			<MDXDocument />
		</MDXProvider>
	);
};

export default BlogPost;
