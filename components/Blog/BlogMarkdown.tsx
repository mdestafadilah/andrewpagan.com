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
    <>
      <Link as={as} href={href}>
        <a className={styles['custom-link']} {...otherProps} />
      </Link>
    </>
  );
};

const CustomH1 = ({ children }: ChildrenProps) => {
  return (
    <>
      <h1 className={styles['custom-h1']}>{children}</h1>
    </>
  );
};

const CustomH2 = ({ children }: ChildrenProps) => {
  return (
    <>
      <h2 className={styles['custom-h2']}>{children}</h2>
    </>
  );
};

const CustomP = ({ children }: ChildrenProps) => {
  return (
    <>
      <p className={styles['custom-p']}>{children}</p>
    </>
  );
};

const CustomStrong = ({ children }: ChildrenProps) => {
  return (
    <>
      <span className={styles['custom-strong']}>{children}</span>
    </>
  );
};

const CustomUl = ({ children }: ChildrenProps) => {
  return (
    <>
      <ul className={styles['custom-ul']}>{children}</ul>
    </>
  );
};

export { CustomLink, CustomH1, CustomH2, CustomP, CustomStrong, CustomUl };
