import React from "react";
import { links } from "./../../public/quick-link.json";
import styles from "./links.module.scss";
import Image from "next/image";
import {
	ImInstagram,
	ImSoundcloud2,
	ImTwitch,
	ImTwitter,
	ImYoutube,
} from "react-icons/im";
import Link from "next/link";

const profileImage = "/images/square-professional-photo.png";

interface ListItemProp {
	url: string;
	name: string;
}

const ListItem: React.FC<ListItemProp> = ({ url, name }) => {
	const source = name.split(" ")[0];

	const openLinkInNewTab = (link: string) => {
		window.open(link, "_blank");
	};

	const iconPicker = () => {
		switch (source) {
			case "SoundCloud":
				return <ImSoundcloud2 />;
			case "Instagram":
				return <ImInstagram />;
			case "Twitter":
				return <ImTwitter />;
			case "Youtube":
				return <ImYoutube />;
			case "Twitch":
				return <ImTwitch />;
		}
	};

	return (
		<li
			className={styles[source]}
			key={url}
			onClick={() => openLinkInNewTab(url)}
		>
			{iconPicker()} {name}
		</li>
	);
};

const Links: React.FC = () => {
	return (
		<div className={styles.links}>
			<div className={styles["image-holder"]}>
				<Link href="/">
					<img src={profileImage} />
				</Link>
			</div>
			<ul>
				{links.map((link) => (
					<ListItem url={link.url} name={link.name} />
				))}
			</ul>
		</div>
	);
};

export default Links;
