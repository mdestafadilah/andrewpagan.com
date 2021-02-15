import Axios from "axios";
import { useEffect, useState } from "react";

import Navigation from "./Navigation";

const { NEXT_PUBLIC_GIPHY_API_KEY } = process.env;
import styles from "./404.module.scss";

const fourOhFour = () => {
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
						offset,
					},
				});

				setGifs(data);
			} catch (err) {}
		};

		getGif();
	}, []);

	return (
		<div>
			<Navigation />
			<div className={styles["gif-holder"]}>
				{gifs.map((gif) => (
					<img key={gif.id} src={gif.images.downsized.url} />
				))}
			</div>
		</div>
	);
};

export default fourOhFour;
