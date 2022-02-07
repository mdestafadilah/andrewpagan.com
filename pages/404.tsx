import Axios from 'axios';
import React, { useEffect, useState, FC, ReactElement } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const { NEXT_PUBLIC_GIPHY_API_KEY } = process.env;
import styles from './404.module.scss';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

interface Gif {
  id: number;
  images: {
    downsized: {
      url: string;
    };
  };
}

interface GifState extends Array<Gif> {}

interface GifState {}

const FourOhFour: FC = (): ReactElement => {
  const MAX_GIPHY_SEARCH = 4999;

  const [gifs, setGifs] = useState<GifState>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getGif = async () => {
      try {
        let {
          data: { data },
        } = await Axios.get('https://api.giphy.com/v1/gifs/trending', {
          params: {
            api_key: NEXT_PUBLIC_GIPHY_API_KEY,
            limit: 1,
            offset: getRandomInt(MAX_GIPHY_SEARCH),
          },
        });

        setGifs(data);
      } catch (err) {}
    };

    getGif();
  }, [offset]);

  const getRandomTrendingGIF = () => {
    let randomNumber = getRandomInt(MAX_GIPHY_SEARCH);

    setOffset(randomNumber);
  };

  return (
    <>
      <Head key="404">
        <title>404 - you okay?</title>
      </Head>

      <div className={styles['gif-holder']}>
        {gifs.map(gif => (
          <Image
            key={gif.id}
            src={gif.images.downsized.url}
            alt="404 Image"
            onClick={getRandomTrendingGIF}
          />
        ))}
      </div>
    </>
  );
};

export default FourOhFour;
