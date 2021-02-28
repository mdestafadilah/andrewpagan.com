import React from "react";
import { links } from "./../../public/quick-link.json";
import styles from "./links.module.scss";
import Image from "next/image";

const profileImage = "/images/andrew-pagan.jpg";

const Links: React.FC = () => {
	const openLinkInNewTab = (link: string) => {
		window.open(link, "_blank");
	};

	return (
		<div className={styles.links}>
			<ul>
				{links.map((link) => (
					<li
						className={styles.link}
						key={link.url}
						onClick={() => openLinkInNewTab(link.url)}
					>
						{link.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Links;
