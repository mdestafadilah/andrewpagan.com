import styles from './Footer.module.scss';
import socialMedia from '@public/social-media.json';

type ListItemProp = {
  url: string;
  name: string;
};

const ListItem = ({ url, name }: ListItemProp) => {
  const iconPicker = () => {
    switch (name) {
      case 'Github':
        return <i className="fa-brands fa-github-square"></i>;
      case 'LinkedIn':
        return <i className="fa-brands fa-linkedin"></i>;
      case 'Leetcode':
        return <i className="fa-solid fa-code"></i>;
      case 'StackOverflow':
        return <i className="fa-brands fa-stack-overflow"></i>;
      case 'SoundCloud':
        return <i className="fa-brands fa-soundcloud"></i>;
    }
  };

  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer">
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
            <a className={styles.link} href="mailto:andrew.r.pagan@gmail.com">
              andrew.r.pagan@gmail.com
            </a>
          </span>
        </div>
        <div className={styles.copyright}>
          <span>©2022 Andrew Pagan</span>
        </div>
      </div>
      <div className={styles.socialMediaLinks}>
        <ul className={styles.linkHolder}>
          {socialMedia['social-media'].map(media => (
            <ListItem
              key={media.name}
              url={media.url}
              name={media.name}></ListItem>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
