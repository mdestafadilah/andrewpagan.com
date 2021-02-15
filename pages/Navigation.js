import styles from "./Navigation.module.scss";
const LOGO = "../images/AP.png";

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<img
				className={styles.icon}
				src={LOGO}
				height="72"
				width="72"
				alt="Andrew Pagan the Third logo"
			/>
		</nav>
	);
};

export default Navigation;
