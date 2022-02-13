import React from 'react';
import links from './../../public/quick-link';
import styles from './links.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const profileImage = '/images/square-professional-photo.png';

interface ListItemProp {
  url: string;
  name: string;
}

const ListItem: React.FC<ListItemProp> = ({ url, name }) => {
  const source = name.split(' ')[0];

  const openLinkInNewTab = (link: string) => {
    window.open(link, '_blank');
  };

  const iconPicker = () => {
    switch (source) {
      case 'SoundCloud':
        return <i className="fa-brands fa-soundcloud"></i>;
      case 'Instagram':
        return <i className="fa-brands fa-instagram"></i>;
      case 'Twitter':
        return <i className="fa-brands fa-twitter"></i>;
      case 'Youtube':
        return <i className="fa-brands fa-youtube"></i>;
      case 'Twitch':
        return <i className="fa-brands fa-twitch"></i>;
    }
  };

  return (
    <li
      className={styles[source]}
      key={url}
      onClick={() => openLinkInNewTab(url)}>
      {iconPicker()} {name}
    </li>
  );
};

const Links: React.FC = () => {
  return (
    <div className={styles.links}>
      <div className={styles['image-holder']}>
        <Link passHref={true} href="/">
          <Image alt="Image of Andrew Pagan" src={profileImage} />
        </Link>
      </div>
      <ul>
        {links.links.map((link, i) => (
          <ListItem key={i} url={link.url} name={link.name} />
        ))}
      </ul>
    </div>
  );
};

export default Links;
