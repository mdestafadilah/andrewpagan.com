import React from "react";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import Link from "next/link";

const LOGO = "/images/AP.png";

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<Link href="/">
				<Image
					className={styles.icon}
					layout="intrinsic"
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
