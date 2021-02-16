import styles from "./Navigation.module.scss";
import Link from "next/link";

const LOGO = "../images/AP.png";

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<Link href="/">
				<img
					className={styles.icon}
					src={LOGO}
					height="72"
					width="72"
					alt="Andrew Pagan the Third logo"
				/>
			</Link>
		</nav>
	);
};

export default Navigation;
