// For dynamic routing

import React from "react";
import { useRouter } from "next/router";

const BlogPost: React.FC = () => {
	const router = useRouter();
	const { title } = router.query;

	return (
		<div>
			<h1>{title}</h1>
			<button onClick={() => router.push("/")}>Back to home?</button>
		</div>
	);
};

export default BlogPost;
