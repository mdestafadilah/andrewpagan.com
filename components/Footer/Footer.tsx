import styles from "./Footer.module.scss";
import socialMedia from "./../public/social-media.json";
import { FaGithubSquare } from "react-icons/fa";
import { SiLinkedin, SiLeetcode } from "react-icons/si";
import { GrStackOverflow } from "react-icons/gr";
import { ImSoundcloud2 } from "react-icons/im";

const ListItem = ({ url, name }) => {
	const iconPicker = () => {
		switch (name) {
			case "Github":
				return <FaGithubSquare />;
			case "LinkedIn":
				return <SiLinkedin />;
			case "Leetcode":
				return <SiLeetcode />;
			case "StackOverflow":
				return <GrStackOverflow />;
			case "SoundCloud":
				return <ImSoundcloud2 />;
		}
	};

	return (
		<li className={styles.item}>
			<a
				className={styles.link}
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{iconPicker()}
			</a>
		</li>
	);
};

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.details}>
				<div className={styles.name}>Andrew Pagan</div>
				<div className={styles.chat}>
					<span>
						Let's chat. --
						<a
							className={styles.link}
							href="mailto:andrew.r.pagan@gmail.com"
						>
							andrew.r.pagan@gmail.com
						</a>
					</span>
				</div>
				<div className={styles.copyright}>
					<span>©2021 Andrew Pagan</span>
				</div>
			</div>
			<div className={styles["social-media-links"]}>
				<ul className={styles["link-holder"]}>
					{socialMedia["social-media"].map((media) => (
						<ListItem
							key={media.name}
							url={media.url}
							name={media.name}
						></ListItem>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
