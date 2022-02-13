import Link from 'next/link';
import styles from './BlogMarkdown.module.scss';

interface CustomLinkProps {
  as: string;
  href: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const CustomLink = ({ as, href, ...otherProps }: CustomLinkProps) => {
  return (
    <Link as={as} href={href}>
      <a className={styles.customLink} {...otherProps} />
    </Link>
  );
};

const CustomH1 = ({ children }: ChildrenProps) => {
  return <h1 className={styles.customH1}>{children}</h1>;
};

const CustomH2 = ({ children }: ChildrenProps) => {
  return <h2 className={styles.customH2}>{children}</h2>;
};

const CustomP = ({ children }: ChildrenProps) => {
  return <p className={styles.customP}>{children}</p>;
};

const CustomStrong = ({ children }: ChildrenProps) => {
  return <span className={styles.customStrong}>{children}</span>;
};

const CustomUl = ({ children }: ChildrenProps) => {
  return <ul className={styles.customUl}>{children}</ul>;
};

export { CustomLink, CustomH1, CustomH2, CustomP, CustomStrong, CustomUl };
