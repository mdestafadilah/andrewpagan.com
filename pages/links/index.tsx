import React from "react";
import links from "./../../public/quick-link.json";
import styles from "./links.module.scss";

interface LinksProps {}

const Links: React.FC = () => {
	const quickLinks = links["quick-links"];

	console.log(quickLinks);
	return (
		<div className={styles.links}>
			<ul>
				{quickLinks.map((link) => (
					<li key={link.url}>{link.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Links;
