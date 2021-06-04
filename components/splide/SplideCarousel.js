import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { isMobile } from 'react-device-detect';

import { useSpring, config, animated } from '@react-spring/web';

import CharCard from './CharCard';

const SplideCarousel = () => {
	const [newIndex, setNewIndex] = useState(0);
	const [oldIndex, setOldIndex] = useState(0);

	const primaryRef = useRef();
	const secondaryRef = useRef();

	useEffect(() => {
		primaryRef.current.sync(secondaryRef.current.splide);
	}, []);

	const chars = [
		{
			visible: false,
			name: 'compound',
			bg: `linear-gradient(160deg, #00D09E 0%, #E8FFF8 ${isMobile ? '100%' : '80%'})`,
		},
		{
			visible: false,
			name: 'luna',
			bg: `linear-gradient(160deg, #0061BA 0%, #D4EEFF ${isMobile ? '100%' : '80%'})`,
		},
		{
			visible: false,
			name: 'binance',
			bg: `linear-gradient(160deg, #FFFBF0 0%, #FFC700 ${isMobile ? '100%' : '80%'})`,
		},
		{
			visible: false,
			name: 'filecoin',
			bg: `linear-gradient(160deg, #75F7FF 0%, #E9FEFF ${isMobile ? '100%' : '80%'})`,
		},
		{
			visible: false,
			name: 'monero',
			bg: `linear-gradient(160deg, #FF6E01 0%, #FFD5B5 ${isMobile ? '100%' : '80%'})`,
		},
		{
			visible: false,
			name: 'polkadot',
			bg: `linear-gradient(160deg, #FECEFF 0%, #543FD4 ${isMobile ? '100%' : '100%'})`,
		},
		{
			visible: false,
			name: 'xlm',
			bg: `linear-gradient(160deg, #D4E9FF 0%, #90C5FF ${isMobile ? '100%' : '80%'})`,
		},
		{
			visible: false,
			name: 'hashgraph',
			bg: `linear-gradient(160deg, #F2F2F2 0%, #003459 ${isMobile ? '100%' : '100%'})`,
		},
	];

	const bgColor = useSpring({
		to: { background: chars[newIndex].bg },
		from: { background: chars[oldIndex].bg },
		config: config.molasses,
	});

	const move = (data) => {};

	const moved = (data) => {
		setNewIndex(data.newIndex);
		setOldIndex(data.oldIndex);
	};

	const drag = (data) => {};

	const dragged = (data) => {};

	const visible = (data) => {};

	const hidden = (data) => {};

	const primaryOptions = {
		type: 'slide',
		perPage: 1,
		speed: 800,
		gap: '40vw',
		padding: '34vw',
		lazyLoad: false,
		trimSpace: true,
		breakpoints: {
			640: {
				speed: 400,
				gap: '20vw',
				padding: '0vw',
			},
			1200: {
				gap: '28vw',
				padding: '12vw',
			},
			1800: {
				gap: '30vw',
				padding: '24vw',
			},
			1800: {
				gap: '36vw',
				padding: '28vw',
			},
		},
		perMove: 1,
		waitForTransition: false,
		pagination: false,
		arrows: false,
	};

	const secondaryOptions = {
		type: 'slide',
		width: '100vw',
		pagination: false,
		fixedWidth: 80,
		fixedHeight: 60,
		lazyLoad: false,
		breakpoints: {
			898: {
				gap: '0rem',
			},
		},
		isNavigation: true,
		updateOnMove: true,
		arrows: false,
	};

	return (
		<>
			<animated.div style={bgColor}>
				<Splide
					options={primaryOptions}
					// onMove={(s, newIndex, oldIndex, destIndex) => move({ newIndex, oldIndex, destIndex })}
					onMoved={(s, newIndex, oldIndex, destIndex) => moved({ newIndex, oldIndex, destIndex })}
					// onVisible={(s, Slide) => visible(Slide)}
					// onHidden={(s, Slide) => hidden(Slide)}
					ref={primaryRef}
				>
					{chars.map((charObj, index) => (
						<SplideSlide key={index} className="">
							<CharCard charName={charObj.name} />
						</SplideSlide>
					))}
				</Splide>
			</animated.div>
			<div className="flex justify-center overflow-hidden galleryBar">
				<Splide className="splide-thumb" options={secondaryOptions} ref={secondaryRef}>
					{chars.map((charObj, index) => (
						<SplideSlide key={index}>
							<Image src={`/splide/${charObj.name}_t.png`} alt={`${charObj.name} thumbnail of ethemeral`} width="160" height="120" />
						</SplideSlide>
					))}
				</Splide>
			</div>
		</>
	);
};

export default SplideCarousel;
