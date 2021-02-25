// For dynamic routing

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

// import MDXDocument, { metadata } from "./test.mdx";

const components = {
	h1: (props: string) => <h1 style={{ color: "tomato" }} {...props} />,
};

const Placeholder: React.FC = () => {
	return <>Loading</>;
};

const BlogPost: React.FC = () => {
	const router = useRouter();
	const { title } = router.query;

	const [Component, setComponent] = useState(Placeholder);

	useEffect(() => {
		const getFile = async () => {
			let file = await import(`./../../_blog-posts/${title}.mdx`);

			console.log("fileee", file.metadata, file.default);
			setComponent(file.default);
		};

		getFile();
	}, [title]);

	return <MDXProvider components={components}>{Component}</MDXProvider>;
};

export default BlogPost;
