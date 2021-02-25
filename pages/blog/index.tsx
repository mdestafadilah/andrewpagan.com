import React from "react";

interface Props {}

const index = (props: Props) => {
	return <div>Bloog</div>;
};

export default index;

// export async function getStaticProps() {
// 	const allPosts = getAllPosts([
// 		"title",
// 		"date",
// 		"slug",
// 		"author",
// 		"coverImage",
// 		"excerpt",
// 	]);

// 	return {
// 		props: { allPosts },
// 	};
// }
