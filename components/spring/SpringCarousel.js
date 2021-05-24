import React, { useState, useEffect } from 'react';
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

import CharCard from './CharCard';

const data = [
	{
		name: 'Rare Wind',
		description: '#a8edea → #fed6e3',
		css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
		height: 200,
	},
	{
		name: 'Saint Petersburg',
		description: '#f5f7fa → #c3cfe2',
		css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
		height: 400,
	},
	{
		name: 'Deep Blue',
		description: '#e0c3fc → #8ec5fc',
		css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
		height: 400,
	},
	{
		name: 'Ripe Malinka',
		description: '#f093fb → #f5576c',
		css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
		height: 400,
	},
	{
		name: 'Perfect White',
		description: '#fdfbfb → #ebedee',
		css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
		height: 400,
	},
	{
		name: 'Near Moon',
		description: '#5ee7df → #b490ca',
		css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
		height: 400,
	},
	{
		name: 'Wild Apple',
		description: '#d299c2 → #fef9d7',
		css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
		height: 200,
	},
	{
		name: 'Ladoga Bottom',
		description: '#ebc0fd → #d9ded8',
		css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
		height: 400,
	},
];

const colors = ['red', 'black', 'hotpink', 'white', 'green'];

const chars = [
	{
		bgColor: 'red',
		name: 'compound',
	},
	{
		bgColor: 'yellow',
		name: 'binance',
	},
	{
		bgColor: 'green',
		name: 'luna',
	},
	{
		bgColor: 'pink',
		name: 'xlm',
	},
];

const charPages = [
	({ style }) => (
		<animated.div style={{ ...style }}>
			<CharCard charName={chars[0].name} />
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style }}>
			<CharCard charName={chars[1].name} />
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style }}>
			<CharCard charName={chars[2].name} />
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style }}>
			<CharCard charName={chars[3].name} />
		</animated.div>
	),
];

const pages = [
	({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
	({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
	({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
];

export default function SpringCarousel() {
	const [open, set] = useState(false);

	const springApi = useSpringRef();
	const { size, ...rest } = useSpring({
		ref: springApi,
		config: config.stiff,
		from: {
			size: '0%',
			background: 'hotpink',
		},
		to: {
			size: open ? '80%' : '0%',
			background: open ? 'white' : 'hotpink',
		},
	});

	const transApi = useSpringRef();
	const transition = useTransition(open ? data : [], {
		ref: transApi,
		trail: 400 / data.length,
		from: { opacity: 0, scale: 0 },
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 0 },
	});

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	useChain(open ? [springApi, transApi] : [transApi, springApi], [0, open ? 0.1 : 0.6]);

	return (
		<div className="block w-full caro-wrapper justify-center bg-blue-300">
			<button className="bg-black top-0" onClick={() => set((open) => !open)}>
				CLICK ME
			</button>
			<CharCard charName="compound" />
			<animated.div style={{ ...rest, width: size, height: size }} className="z-50 w-full h-full grid grid-cols-2 cursor-pointer" onClick={() => set((open) => !open)}>
				{transition((style, item) => (
					<animated.div className="caro-item" style={{ ...style, background: item.css }} />
				))}
			</animated.div>
		</div>
	);
}
