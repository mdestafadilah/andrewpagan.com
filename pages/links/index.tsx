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
        return (
          <i
            className="fa-brands fa-soundcloud"
            style={{ color: '#ff7700' }}></i>
        );
      case 'Instagram':
        return (
          <i
            className="fa-brands fa-instagram"
            style={{ color: '#c13584' }}></i>
        );
      case 'Twitter':
        return (
          <i className="fa-brands fa-twitter" style={{ color: '#55acee' }}></i>
        );
      case 'Youtube':
        return (
          <i className="fa-brands fa-youtube" style={{ color: '#ff0000' }}></i>
        );
      case 'Twitch':
        return (
          <i className="fa-brands fa-twitch" style={{ color: '#6441a5' }}></i>
        );
    }
  };

  return (
    <li
      className={styles.source}
      key={url}
      onClick={() => openLinkInNewTab(url)}>
      {iconPicker()} {name}
    </li>
  );
};

const Links: React.FC = () => {
  return (
    <div className={styles.links}>
      <div className={styles.imageHolder}>
        <Link passHref={true} href="/">
          <Image
            alt="Image of Andrew Pagan"
            width={150}
            height={150}
            src={profileImage}
          />
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
