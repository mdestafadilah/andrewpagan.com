import Axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";

import Navigation from "../components/Layouts/Navigation/Navigation";
import Footer from "../components/Layouts/Footer/Footer";

const { NEXT_PUBLIC_GIPHY_API_KEY } = process.env;
import styles from "./404.module.scss";

const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * Math.floor(max));
};

const fourOhFour = () => {
	const MAX_GIPHY_SEARCH = 4999;

	const [gifs, setGifs] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const getGif = async () => {
			try {
				let {
					data: { data },
				} = await Axios.get("https://api.giphy.com/v1/gifs/trending", {
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
			<Head>
				<title>404 - you okay?</title>
			</Head>
			<Navigation />

			<div className={styles["gif-holder"]}>
				{gifs.map((gif) => (
					<img
						key={gif.id}
						src={gif.images.downsized.url}
						onClick={getRandomTrendingGIF}
					/>
				))}
			</div>

			<Footer />
		</>
	);
};

export default fourOhFour;
