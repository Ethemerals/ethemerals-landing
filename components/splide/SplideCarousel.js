import React, { Component, useEffect, useState, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { isMobile } from 'react-device-detect';

import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

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

	const move = (data) => {
		// Fired right before a slider moves.
		console.log('move');

		// console.log(data);
		// const chars = this.state.chars;
		// chars[data.newIndex].visible = true;
		// chars[data.oldIndex].visible = false;
		// this.setState(({ chars }) => ({ chars }));
		// console.log(this.state.chars[data.newIndex]);
		// console.log(this.state.chars[data.oldIndex]);
	};

	const moved = (data) => {
		// Fired right after a slider moves.

		console.log('moved');
		console.log(data);
		setNewIndex(data.newIndex);
		setOldIndex(data.oldIndex);
		// const chars = this.state.chars;
		// chars[data.newIndex].visible = true;
		// chars[data.oldIndex].visible = false;
		// this.setState(({ chars }) => ({ chars }));
		// console.log(this.state.chars[data.newIndex]);
		// console.log(this.state.chars[data.oldIndex]);
	};

	const drag = (data) => {
		// Fired when dragging/swiping is started.
		console.log('drag');
	};

	const dragged = (data) => {
		// Fired right after dragging/swiping is finished.
		console.log('dragged');
	};

	const visible = (data) => {
		// Fired when a slide is made visible on a view port.
		// console.log('visible');
		// const slide = this.state.chars[data.index];
		// console.log(slide);
		// console.log(slide.name, slide.leftbarRef.current);
	};

	const hidden = (data) => {
		// Fired when a slide is made hidden from a view port.
		// console.log('hidden');
		// console.log(data.index);
		// if (data.index != 0) {
		// 	console.log(this.state.chars[0].leftbarRef.current);
		// }
	};

	const primaryOptions = {
		type: 'slide',
		perPage: 1,
		speed: 800,
		gap: '30vw',
		padding: '20vw',
		lazyLoad: false,
		breakpoints: {
			640: {
				speed: 400,
				gap: '20vw',
				padding: '0vw',
			},
			1200: {
				gap: '20vw',
				padding: '10vw',
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
		gap: '1rem',
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
					onMove={(s, newIndex, oldIndex, destIndex) => move({ newIndex, oldIndex, destIndex })}
					onMoved={(s, newIndex, oldIndex, destIndex) => moved({ newIndex, oldIndex, destIndex })}
					onVisible={(s, Slide) => visible(Slide)}
					onHidden={(s, Slide) => hidden(Slide)}
					ref={primaryRef}
				>
					{chars.map((charObj, index) => (
						<SplideSlide key={index}>
							<CharCard charName={charObj.name} />
						</SplideSlide>
					))}
				</Splide>
			</animated.div>
			<div className="flex justify-center overflow-hidden galleryBar">
				<Splide className="splide-thumb" options={secondaryOptions} ref={secondaryRef}>
					{chars.map((charObj, index) => (
						<SplideSlide key={index}>
							<img src={`./splide/${charObj.name}_t.png`} alt={`${charObj.name} thumbnail`} />
						</SplideSlide>
					))}
				</Splide>
			</div>
		</>
	);
};

export default SplideCarousel;
