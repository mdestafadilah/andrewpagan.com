// For dynamic routing

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

const components = {
	h1: (props: string) => <h1 style={{ color: "tomato" }} {...props} />,
};

const Placeholder: React.FC = () => {
	return <>Loading</>;
};

const BlogPost: React.FC = () => {
	const router = useRouter();
	const { title } = router.query;

	const [Component, setComponent] = useState<React.FC>(Placeholder);
	const [metadata, setMetadata] = useState<any>("");

	useEffect(() => {
		const getFile = async () => {
			if (title) {
				let file = await import(`./../../_blog-posts/${title}.mdx`);

				setComponent(file.default);
				setMetadata(file.metadata);
			}
		};

		getFile();
	}, [title]);

	return <MDXProvider components={components}>{Component}</MDXProvider>;
};

export default BlogPost;
