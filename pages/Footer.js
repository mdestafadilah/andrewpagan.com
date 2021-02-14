import styles from "./Footer.module.scss";

const ListItem = ({ url, icon }) => {
	return (
		<li className={styles.item}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<i className={icon}></i>
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
						<a href="mailto:andrew.r.pagan@gmail.com">
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
					<ListItem
						url="https://github.com/drewkiimon"
						icon="fa fa-github"
					/>
					<ListItem
						url="https://www.linkedin.com/in/andrewpagan/"
						icon="fa fa-linkedin"
					/>
					<ListItem
						url="https://soundcloud.com/drewkiimon"
						icon="fa fa-soundcloud"
					/>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
