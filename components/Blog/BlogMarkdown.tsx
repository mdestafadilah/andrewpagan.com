import Link from "next/link";
import styles from "./BlogMarkdown.module.scss";

interface CustomLinkProps {
	as: string;
	href: string;
}

const CustomLink = ({ as, href, ...otherProps }: CustomLinkProps) => {
	return (
		<>
			<Link as={as} href={href}>
				<a className={styles["custom-link"]} {...otherProps} />
			</Link>
		</>
	);
};

const CustomH1 = ({ children }) => {
	return (
		<>
			<h1 className={styles["custom-h1"]}>{children}</h1>
		</>
	);
};

const CustomH2 = ({ children }) => {
	return (
		<>
			<h2 className={styles["custom-h2"]}>{children}</h2>
		</>
	);
};

const CustomP = ({ children }) => {
	return (
		<>
			<p className={styles["custom-p"]}>{children}</p>
		</>
	);
};

const CustomStrong = ({ children }) => {
	return (
		<>
			<span className={styles["custom-strong"]}>{children}</span>
		</>
	);
};

export { CustomLink, CustomH1, CustomH2, CustomP, CustomStrong };
