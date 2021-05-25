import React, { Component, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { isMobile } from 'react-device-detect';

import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

import CharCard from './CharCard';

const SplideCarousel = () => {
	const [newIndex, setNewIndex] = useState(0);
	const [oldIndex, setOldIndex] = useState(0);

	const chars = [
		{
			visible: false,
			name: 'compound',

			bg: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
			charRef: React.createRef(),
			leftbarRef: React.createRef(),
			rightbarRef: React.createRef(),
		},
		{
			visible: false,
			name: 'luna',
			bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
			charRef: React.createRef(),
			leftbarRef: React.createRef(),
			rightbarRef: React.createRef(),
		},
		{
			visible: false,
			name: 'binance',
			bg: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
			charRef: React.createRef(),
			leftbarRef: React.createRef(),
			rightbarRef: React.createRef(),
		},
		{
			visible: false,
			name: 'monero',
			bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
			charRef: React.createRef(),
			leftbarRef: React.createRef(),
			rightbarRef: React.createRef(),
		},
		{
			visible: false,
			name: 'polkadot',
			bg: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
			charRef: React.createRef(),
			leftbarRef: React.createRef(),
			rightbarRef: React.createRef(),
		},
		{
			visible: false,
			name: 'xlm',
			bg: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
			charRef: React.createRef(),
			leftbarRef: React.createRef(),
			rightbarRef: React.createRef(),
		},
		{
			visible: false,
			name: 'hashgraph',
			bg: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
			charRef: React.createRef(),
			leftbarRef: React.createRef(),
			rightbarRef: React.createRef(),
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

	const options = {
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
	};

	return (
		<animated.div style={bgColor}>
			<Splide
				options={options}
				onMove={(s, newIndex, oldIndex, destIndex) => move({ newIndex, oldIndex, destIndex })}
				onMoved={(s, newIndex, oldIndex, destIndex) => moved({ newIndex, oldIndex, destIndex })}
				onVisible={(s, Slide) => visible(Slide)}
				onHidden={(s, Slide) => hidden(Slide)}
			>
				{chars.map((charObj, index) => {
					const char = charObj.name;

					return (
						<SplideSlide key={index}>
							<CharCard charName={charObj.name} />
						</SplideSlide>
					);
				})}
			</Splide>
		</animated.div>
	);
};

export default SplideCarousel;
