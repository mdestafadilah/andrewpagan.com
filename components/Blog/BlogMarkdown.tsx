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

const CustomP = ({ children }) => {
	return (
		<>
			<p className={styles["custom-p"]}>{children}</p>
		</>
	);
};

export { CustomLink, CustomH1, CustomP };