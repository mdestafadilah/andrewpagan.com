// import logo from "../public/AP.png";
import styles from "./Navigation.module.scss";

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<img
				className={styles.icon}
				// src={logo}
				height="72"
				width="72"
				alt="Andrew Pagan the Third logo"
			/>
		</nav>
	);
};

export default Navigation;
