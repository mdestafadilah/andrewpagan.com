export type QuickLink = {
  name: string;
  url: string;
};

export type QuickLinks = { links: Array<QuickLink> };

const links: QuickLinks = {
  links: [
    {
      name: 'SoundCloud',
      url: 'https://soundcloud.com/drewkiimon',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/drewkiimon',
    },
    {
      name: 'Twitter (professional)',
      url: 'https://twitter.com/AndrewPaganIII',
    },
    {
      name: 'Twitter (personal)',
      url: 'https://twitter.com/drewkiimon',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCJ7qvNwoTVzausewSuc11MQ',
    },
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/drewkiimon',
    },
  ],
};

export default links;
