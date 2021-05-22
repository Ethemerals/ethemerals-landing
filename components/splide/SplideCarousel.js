import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Anime from 'react-anime';

import CharCard from './CharCard';

const SplideCarousel = () => {
	const [windowWidth, setWindowWidth] = useState(1000);
	// const [options, setOptions] = useState({});

	// const handleResize = (e) => {
	// 	setWindowWidth(window.innerWidth);
	// };

	const options = {
		type: 'loop',
		perPage: 1,
		perMove: 1,
		lazyLoad: true,
		pagination: true,
	};

	// useEffect(() => {
	// 	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	// 		window.addEventListener('resize', handleResize);
	// 		handleResize();
	// 	}

	// 	setOptions(newOptions);
	// }, []);

	// useEffect(() => {
	// 	const newOptions = options;
	// 	if (windowWidth > 900) {
	// 		newOptions.perPage = 3;

	// 		setOptions(newOptions);
	// 	} else {
	// 		newOptions.perPage = 1;

	// 		setOptions(newOptions);
	// 	}
	// 	console.log(windowWidth);
	// }, [windowWidth]);

	const slideClassName = 'flex justify-center border';
	let colors = ['bg-blue-400', 'bg-green-400', 'bg-red-400'];

	return (
		<Splide options={options} className="bg-blue-400">
			<CharCard charName="compound" />
			<CharCard charName="luna" />
			<CharCard charName="binance" />
			<CharCard charName="filecoin" />
			<CharCard charName="monero" />
			<CharCard charName="polkadot" />
			<CharCard charName="xlm" />
			<CharCard charName="hashgraph" />
		</Splide>
	);
};

export default SplideCarousel;
